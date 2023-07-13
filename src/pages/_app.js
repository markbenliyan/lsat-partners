// _app.js
import RootLayout from '../layouts/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default MyApp
