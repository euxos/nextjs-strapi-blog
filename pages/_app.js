import Header from 'components/Header/Header';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';

const theme = {
  colors: {
    primary: '#ff3333'
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>

    </>
  )
}

export default MyApp
