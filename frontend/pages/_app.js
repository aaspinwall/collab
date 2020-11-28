import { gql } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

import '../styles/globals.css'

import ApolloClient from '../apollo';

function MyApp({ Component, pageProps }) {
  ApolloClient.query({
    query: gql`
      query {
        test
      }
    `
  })
  .then((res)=>console.log('res',res))
  return (
    <ApolloProvider client={ApolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
