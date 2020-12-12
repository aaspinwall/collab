import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

import styled from "styled-components";

/* +++++ testing the "CreateUser endpoint" ++++ */

// this is the query
/***
 * @argument $name String
 * @argument $email String
 * @returns UserObject, code (http rules), success (Boolean), message (String)
 */
const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!) {
    addUser(user: { name: $name, email: $email }) {
      user {
        name
        email
        id
      }
      code
      success
      message
    }
  }
`;

const CreateUser = () => {
  /* ++++ form control ++++ */
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  /* ++++ GraphQL Apollo Mutation query hook ++++ */
  /**
   * addUser - the name of the mutation query in the BackEnd
   * { data } - the return object
   * ADD_USER - the query we created up there ^
   */
  const [addUser, { data }] = useMutation(ADD_USER);

  return (
    <div>
      <h3>add user:</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addUser({
            variables: {
              name: userName,
              email: userEmail,
            },
          });
          setUserEmail("");
          setUserName("");
        }}
      >
        <label>
          user name:
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          user email:
          <input
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
        <button type="submit">Add user</button>
      </form>
      {data && (
        <div>
          <p>
            response: {data.addUser.code},{" "}
            {data.addUser.success ? "success" : "fail"}, {data.addUser.message}
          </p>
          {data.addUser.user && (
            <p>
              userAdded: {data.addUser.user.name}, {data.addUser.user.email},{" "}
              {data.addUser.user.id}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CreateUser;

const Wrapper = styled.div``;
