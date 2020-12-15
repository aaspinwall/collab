import React from "react";
import Head from "next/head";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import LayoutWrapper from "./elements";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";

//styles live inside the elements file

const Layout = ({ children, title }) => {
  return (
    <LayoutWrapper>
      {/* Head handles the metadata. Good for SEO but it doesn't get rendered */}
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Test>
        {/* Children passes all the page content */}
        {children}
      </Test>
      {/* Footer component */}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;

const Test = styled.div`
  background: linear-gradient(
    to left top,
    ${COLORS.PURPLES.LIGHT} 50%,
    ${COLORS.PURPLES.MAIN} 50%
  );
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
