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
    imageFullUrl: string;
    children: ReactNode
}

const MainLayout: FC<Props> = ({ title, pageDescription, children }) => {
    return (
        <>
            <Head>
                <meta name="description" content={pageDescription} />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />
            </Head>
            <NavBar />
            <SideBar />
            <main>
                {children}
            </main>
            <Box width={"100%"} position={'fixed'} zIndex={99} bottom={20} display={'flex'} justifyContent={'flex-end'}>
                <NextLink legacyBehavior href={"https://wa.me/541169402036"} passHref>
                    <Link target="blank">
                        <WhatsAppIcon sx={{ fontSize: 70, color: "#39d05c" }} />
                    </Link>
                </NextLink>
            </Box>
            <footer style={{ bottom: 0, left: 0, right: 0}}>
                <Footer />
            </footer>
        </>
    )
}
export default MainLayout