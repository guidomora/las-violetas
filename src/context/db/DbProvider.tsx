import { FC, PropsWithChildren, ReactNode, useReducer } from "react";
import DbContext from './DbContext';
import { dbReducer } from "./dbReducer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { Products } from "@/interfaces/products";


export interface DbState {
    products: Products[]
}

const Db_INITIAL_STATE: DbState = {
    products: [
        {
            titulo: "",
            precio: "",
            imagen: "",
            descripcion: "",
            categoria: ""
        }
    ]

}


// Creamos el provider
const DbProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(dbReducer, Db_INITIAL_STATE)

    const getData = async () => {
        const data: Products[] = []
        const querySnapshot = await getDocs(collection(db, "productos"));
        querySnapshot.forEach((doc) => {
            // doc.data() es del tipo DocumentData, por lo que necesitas convertirlo a Products
            const productData = doc.data() as Products;
            const product: Products = {
                titulo: productData.titulo,
                precio: productData.precio,
                imagen: productData.imagen,
                descripcion: productData.descripcion,
                categoria: productData.categoria,
            };
            data.push(product);
        });
        dispatch({ type: "[Products] get products", payload: data })
    }


    return (
        <DbContext.Provider value={{
            ...state,
            getData
        }}>
            {children}
        </DbContext.Provider>
    )
}

export default DbProvider