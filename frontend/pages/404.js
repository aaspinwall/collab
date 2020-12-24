import styled from "styled-components";
import { COLORS } from "../styles/colors";
import Card from "../components/ui/card";
import Link from "next/link";

export default function Custom404() {
  return (
    <Wrapper>
      <Card className="card-container">
        <div>
          <h1>Hmm, this isn't what you're looking for...</h1>
          <h2>Try a button below!</h2>
        </div>
        <div className="btns-center">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/room/create-room">
            <a>Create A Room</a>
          </Link>
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </div>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 80vh;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${COLORS.PURPLES.MAIN};
  .card-container {
    box-shadow: 0 0 5px 3px rgba(0, 0, 0);
    background-color: rgba(255, 255, 255, 0.65);
    max-width: 80vw;
  }
  .btns-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.5rem;
    font-style: italic;
  }

  a {
    font-size: 1.5rem;
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
    border: 3px solid ${COLORS.PURPLES.MAIN};
    background: ${COLORS.GREY};

    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      color: #0070f3;
      border-color: #0070f3;
    }

    &:active {
      box-shadow: inset 0px 0px 5px ${COLORS.SHADES.DARKGREY};
      outline: none;
      transform: scale(0.9);
    }
  }
`;
