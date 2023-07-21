import { mainTheme } from '@/components/theme/theme'
import NavProvider from '@/context/NavProvider'
import '@/styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavProvider>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </NavProvider>

  )
}
