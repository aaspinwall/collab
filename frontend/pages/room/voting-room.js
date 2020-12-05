import Link from "next/link";
import styled from "styled-components";
import Layout from "../../components/layout";
import Timer from "../../components/timer";

export default function LandingPage() {
  return (
    <Layout title="Now Voting!">
      <Container>
        <Header>Voting Page</Header>

        <Timer key={200} onTimeIsUp={(message) => alert(message)} />

        <Description>
          This page will be where the voting itself takes place
        </Description>
        <Link href="/landing">
          <Button>Home</Button>
        </Link>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  /* background-color: #eb5e28; */
  background: linear-gradient(to left top, #fff 50%, #eb5e28 50%);
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

const Button = styled.button`
  margin-top: 15px;
  padding: 8px;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 2px;
  border: 3px solid #293241;
  cursor: pointer;

  &:active {
    background: #e5e5e5;
    box-shadow: inset 0px 0px 5px #c1c1c1;
    outline: none;
    transform: scale(0.9);
  }
`;
