import PropTypes from "prop-types";
import Layout from "../components/layout";
import GlobalStyles from "../styles/GlobalStyles";

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
