import Link from "next/link";
import styled from "styled-components";

export default function LandingPage() {
  return (
    <Container>
      <Header>Agora</Header>

      <Link href="/room/create-room">
        <a>Create A Room</a>
      </Link>
      <Link href="/room/voting-room">
        <a>Voting Room</a>
      </Link>
      <Link href="/room/results">
        <a>Results</a>
      </Link>
      <Link href="/info">
        <a>About Us</a>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  /* background-color: #eb5e28; */
  background: linear-gradient(to left top, #fff 50%, #eb5e28 50%);
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    width: 150px;
    height: 55px;
    padding: 8px;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 2px;
    border: 3px solid #293241;
    background: #e5e5e5;

    cursor: pointer;

    &:active {
      box-shadow: inset 0px 0px 5px #c1c1c1;
      outline: none;
      transform: scale(0.9);
    }
  }
`;

const Header = styled.h1`
  color: #293241;
  text-align: center;
  margin-top: 0;
  padding-top: 15px;
  font-size: 3rem;
`;
