import Head from 'next/head'
import {FC, ReactNode} from "react"
import NavBar from '../ui/NavBar';
import Portada from '../ui/Portada';
import Footer from '../ui/Footer';
import SideBar from '../ui/SideBar';



interface Props {
    title:string;
    pageDescription: string;
    imageFullUrl: string;
    children: ReactNode
}

const MainLayout: FC<Props> = ({title, pageDescription, children}) => {
    return (
        <>
        <Head>
            <meta name="description" content={pageDescription} />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={pageDescription} />
        </Head>
        <NavBar />
        <SideBar />
        <Portada />
        <main>
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
        </>
    )
}

export default MainLayout