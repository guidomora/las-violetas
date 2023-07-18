import Head from 'next/head'
import {FC, ReactNode} from "react"

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
        <nav>

        </nav>
        <main>
            {children}
        </main>
        <footer>
            
        </footer>
        </>
    )
}

export default MainLayout