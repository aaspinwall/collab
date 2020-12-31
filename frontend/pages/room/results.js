import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Card from "../../components/ui/card";
import { COLORS } from "../../styles/colors";
import { ReturnHomeStyles } from "../../styles/button";

export default function ResultsPage() {
  return (
    <Container>
      <Card>
        <Head>
          <title>Results!</title>
        </Head>
        <Header>Results</Header>
        <Description>
          This page will be used to display the results of the vote
        </Description>
        <Link href="/">
          <button>Home</button>
        </Link>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.h1`
  color: #293241;
  text-align: center;
  margin-top: 0;
  padding-top: 15px;
  font-size: 3rem;
`;

const Description = styled.p`
  color: #293241;
  margin-left: 1rem;
`;
