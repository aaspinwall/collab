import { useQuery, gql } from "@apollo/client";

import Layout from "../components/layout";
import SampleButton from "../components/ui/sample_button";

import styled from "styled-components";
import GetAllUsers from "../components/polloTest/GetAllUsers";
import CreateUser from "../components/polloTest/CreateUser";
import DeleteUser from "../components/polloTest/DeleteUser";

const ApolloTest = () => {
  return (
    <Wrapper>
      <h1>ApolloTest</h1>
      <p>
        all the components and comments are in
        <code>components/polloTest</code>
      </p>
      <GetAllUsers />
      <CreateUser />
      <DeleteUser />
    </Wrapper>
  );
};

export default ApolloTest;

const Wrapper = styled.div``;
