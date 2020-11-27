import React from "react";
import Head from "next/head";
import Footer from "../ui/footer";
import LayoutWrapper from "./elements";

//styles live inside the elements file

const Layout = ({ children, title }) => {
  return (
    <LayoutWrapper>
      {/* Head handles the metadata. Good for SEO but it doesn't get rendered */}
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Children passes all the page content */}
      {children}

      {/* Footer component */}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
