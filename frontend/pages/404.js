import styled from "styled-components";
import { COLORS } from "../styles/colors";
import Card from "../components/ui/card";
import Link from "next/link";
import Button from "../components/ui/sample_button";

export default function Custom404() {
  return (
    <Wrapper>
      <Card className="card-container">
        <div>
          <h1>Hmm, this isn't what you're looking for...</h1>
          <h2>Try a button below!</h2>
        </div>
      </Card>
      <Button className="btn-error">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Button>
      <Button className="btn-error">
        <Link href="/room/create-room">
          <a>Create A Room</a>
        </Link>
      </Button>
      <Button className="btn-error">
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
      </Button>
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
  .btn-error {
    margin-top: 25px;
  }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.5rem;
    font-style: italic;
  }
`;
