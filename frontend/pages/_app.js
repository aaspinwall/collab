import PropTypes from "prop-types";
import Layout from "../components/layout";
import "../styles/globals.css";

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
