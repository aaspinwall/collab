import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";

import { SubmitVote } from "../../../styles/button";
import { ADD_VOTER_DATA } from "../../polloTest/GetRoomData";
import { VOTER_VOTED } from "../../../apollo/voters/voters.subscriptions";
import { useMutation, useSubscription } from "@apollo/client";
import Modal from "../../ui/modal";
import Button from "../sample_button";
import { SubmitVoteStyles } from "../../../styles/button";
import { COLORS } from "../../../styles/colors";
import { isNonEmptyArray } from "@apollo/client/utilities";

const CheckboxForm = ({ voteOptions, roomID }) => {
  const [addVoterData] = useMutation(ADD_VOTER_DATA);
  const { data, loading } = useSubscription(VOTER_VOTED);

  const [open, setOpen] = useState(false);
  const [radioCheck, setRadioCheck] = useState(false);

  useEffect(() => {
    if (data) {
      const { voterVoted } = data;
      console.log(
        `Cool! ${voterVoted.name} just voted for ${voterVoted.voteData}`
      );
    }
  }, [data, loading]);

  const handleRadioClick = () => {
    const radioButtons = document.getElementsByName("vote-options");
    radioButtons.forEach((radio) => {
      if (radio.checked) {
        setRadioCheck(radio.value);
      }
    });
  };
  const handleVoteSubmit = async (ev) => {
    ev.preventDefault();
    const res = await addVoterData({
      variables: {
        id: roomID,
        name: localStorage.getItem("name"),
        option: radioCheck,
      },
    });

    setOpen(true);

    console.log(res);
    // TODO: push radioCheck to DB

    // add functionality to go back to home page instead of having a dedicated home button
  };

  return (
    <Container>
      <form>
        <fieldset id={"vote-options"} className={"radio-container"}>
          {voteOptions.map((option, index) => {
            return (
              <div key={`vote-option-${index}`} className="vote-option">
                <label htmlFor={option}>
                  {option}
                  <input
                    type="radio"
                    name="vote-options"
                    value={option}
                    onClick={handleRadioClick}
                  />
                  <span className={"radio-check"}></span>
                </label>
              </div>
            );
          })}
        </fieldset>
        {open ? (
          <Modal open={open} setOpen={setOpen}>
            <MessageContainer>
              <VoteMessage>Good Job!</VoteMessage>
              <VoteMessage>You Voted For {radioCheck}</VoteMessage>
            </MessageContainer>
            <NavigationButtons>
              <Link href="/">
                <a>Take Me Home</a>
              </Link>
              <Link href={`/results/${roomID}`}>
                <a>Go To Results</a>
              </Link>
              <button onClick={() => setOpen(false)}>Wait Here</button>
            </NavigationButtons>
          </Modal>
        ) : (
          <Button
            children={"Submit Your Vote!"}
            disabled={!radioCheck}
            onClick={handleVoteSubmit}
            styles={SubmitVoteStyles}
            style={radioCheck && { display: "none" }}
          />
        )}
      </form>
    </Container>
  );
};

export default CheckboxForm;

const Container = styled.div`
  background-color: ghostwhite;
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5);

  form {
    display: flex;
    flex-direction: column;
    padding: 35px;

    .vote-option {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
      align-items: center;
      padding: 8px 0;
      border-bottom: 1px solid ${COLORS.PURPLES.MAIN};
      font-weight: bold;
      position: relative;

      label {
        padding-left: 30px;
      }
      &:last-child {
        border-bottom: none;
      }
      input {
        position: absolute;
        top: 5px;
        left: 0;
        width: 20px;
        height: 20px;
        z-index: 1;
        opacity: 0;
        cursor: pointer;
        margin: 0;
      }
      input:hover ~ span {
        background-color: ${COLORS.PURPLES.LIGHT};
      }
      input:checked ~ .radio-check {
        background-color: ${COLORS.PURPLES.MAIN};
      }
      input:checked ~ .radio-check:after {
        display: block;
      }
    }
    .radio-check {
      position: absolute;
      top: 5px;
      left: 0;
      height: 20px;
      width: 20px;
      border-radius: 5px;
      background-color: ${COLORS.SHADES.OFFWHITE};
      border: 1px solid ${COLORS.PURPLES.MAIN};
      cursor: pointer;

      &:hover {
        background-color: ${COLORS.PURPLES.LIGHT};
      }
      &:after {
        content: "";
        position: absolute;
        display: none;
      }
    }
    .radio-container {
      border: 0;
      margin: 0;
      padding: 0;
    }
  }
`;
const NavigationButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  a,
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    border: 2px solid ${COLORS.PURPLES.MAIN};
    height: 30px;
    transition: all 0.2s;
    background-color: ${COLORS.SHADES.OFFWHITE};
    font-weight: bold;
    font-size: 1.25em;
    color: ${COLORS.PURPLES.MAIN};
    cursor: pointer;
    overflow: hidden;

    &:hover {
      flex: 5;
      background-color: ${COLORS.PURPLES.MAIN};
      color: ${COLORS.SHADES.OFFWHITE};
    }
  }
  a {
    border-right: none;
  }
  a:first-of-type {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }
  button {
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }
  &:hover a,
  &:hover button {
    color: ${COLORS.SHADES.OFFWHITE};
  }
`;
const VoteMessage = styled.p`
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px;
`;
