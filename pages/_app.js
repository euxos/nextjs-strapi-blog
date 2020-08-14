import Header from 'components/Header/Header';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';
import { ApolloProvider } from '@apollo/client';
import client from './api/graphql';

const theme = {
  colors: {
    primary: 'grey'
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <>

      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
        
      

    </>
  )
}

export default MyApp
