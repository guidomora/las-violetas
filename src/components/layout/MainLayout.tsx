import Head from 'next/head'
import { FC, ReactNode } from "react"
import NavBar from '../ui/NavBar';
import Footer from '../ui/Footer';
import SideBar from '../ui/SideBar';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Link } from '@mui/material';
import NextLink from "next/link"


interface Props {
    title: string;
    pageDescription: string;
    children: ReactNode
}

const MainLayout: FC<Props> = ({ title, pageDescription, children }) => {
    return (
        <>
            <Head>
                <title>{title || "Las violetas"}</title>
                <meta name='author' content='Guido Morabito' />
                <meta name='description' content={` ${pageDescription}`} />
                <meta name='keywords' content={`${title}, coronas, consolencias`} />
                <meta name="description" content={pageDescription} />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />
                <meta property="og:image" content={"{'https://firebasestorage.googleapis.com/v0/b/segunda-floreria.appspot.com/o/newPortada.png?alt=media&token=26361baf-5527-4eed-9864-eb86328a2989'}"} />
            </Head>
            <NavBar />
            <SideBar />
            <main style={{ backgroundColor: "#f8f9fa" }}>
                {children}
            </main>
            <Box width={"100%"} position={'fixed'} zIndex={99} bottom={20} display={'flex'} justifyContent={'flex-end'}>
                <NextLink legacyBehavior href={"https://wa.me/541169402036"} passHref>
                    <Link target="blank">
                        <WhatsAppIcon sx={{ fontSize: 70, color: "#39d05c" }} />
                    </Link>
                </NextLink>
            </Box>
            <footer style={{ bottom: 0, left: 0, right: 0 }}>
                <Footer />
            </footer>
        </>
    )
}
export default MainLayout