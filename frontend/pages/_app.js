import PropTypes from "prop-types";
import Layout from "../components/layout";
import "../styles/globals.css";

import '../styles/globals.css'

// this imports the "client"- which is the connection
// to the BE 
// (at the moment the be is "localhost", when we will
// have it hosted we can change it)
import ApolloClient from '../apollo';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
