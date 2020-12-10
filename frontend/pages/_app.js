import { gql } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

import '../styles/globals.css'

// this imports the "client"- which is the connection
// to the BE 
// (at the moment the be is "localhost", when we will
// have it hosted we can change it)
import ApolloClient from '../apollo';

function MyApp({ Component, pageProps }) {
  
  // test query without hooks
  // the response is console.logged
  return (
    // so that we can make the calls anywhere in the app
    // we wrap it in a provider.
    // this way we can use the hooks in the app
    <ApolloProvider client={ApolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp;
