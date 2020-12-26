import React from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const USER_ID = process.env.NEXT_PUBLIC_USER_ID;

console.log(SERVICE_ID, USER_ID);

export default function ContactForm() {
  const [emailStatus, setEmailStatus] = React.useState(false);

  // const h = window.innerHeight;
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(`${SERVICE_ID}`, "template_pofehym", e.target, `${USER_ID}`)
      .then(
        (result) => {
          console.log(result.text);
          setEmailStatus(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <Wrapper>
      <Title>Contact Us</Title>
      <Form id="contact" className="contact-form" onSubmit={sendEmail}>
        <div>
          <Elem>
            <Input type="text" placeholder="Name" name="name" />
          </Elem>
          <Elem>
            <Input type="email" placeholder="Email Address" name="email" />
          </Elem>
          <Elem>
            <Input type="text" placeholder="Subject" name="subject" />
          </Elem>
          <Elem>
            <Text
              id=""
              cols="40"
              rows="8"
              placeholder=" Your message"
              name="message"
            ></Text>
          </Elem>
          <div className="submit-contact">
            <Send type="submit" value="Send Message"></Send>
          </div>
        </div>
        {emailStatus && <p>Thanks for reaching out!</p>}
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 50px 25px 25px 25px;
  padding: 15px;
  background-color: white;
  border-radius: 14px;
  .submit-contact {
    margin-left: 10px;
  }
`;

const Title = styled.h1`
  text-decoration: underline;
  text-align: center;
  letter-spacing: 3.5px;
  margin-bottom: 10px;
  margin-top: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`;

const Elem = styled.div`
  margin: 5px;
  @media (min-width: 780px) {
    margin: 15px;
  }
`;

const Input = styled.input`
  background: none;
  border: 2px solid black;
  color: black;
  border-radius: 5px;
  padding: 8px;
  font-style: italic;
  width: 100%;
  ::placeholder {
    color: black;
    font-family: "Montserrat", sans-serif;
    padding: 1px;
  }
`;

const Text = styled.textarea`
  background: none;
  border: 2px solid black;
  resize: none;
  color: black;
  border-radius: 5px;
  padding: 8px;
  font-family: "Montserrat", sans-serif;

  ::placeholder {
    color: black;
    font-family: "Montserrat", sans-serif;
  }
`;

const Send = styled.input`
  background: none;
  border: 2px solid black;
  border-radius: 5px;
  color: black;
  margin-left: 4px;
  padding: 8px;
  &:active {
    color: black;
    background: black;
  }
`;
