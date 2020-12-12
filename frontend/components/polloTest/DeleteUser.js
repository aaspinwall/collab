import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

import styled from "styled-components";

// this is the query
/***
 * @argument $id ID
 * @returns code (http rules), success (Boolean), message (String)
 */
const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      success
      code
      message
    }
  }
`;

const DeleteUser = () => {
  /* ++++ form control ++++ */
  const [userID, setUserID] = useState("");

  /* ++++ GraphQL Apollo Mutation query hook ++++ */
  /**
   * deleteUser - the name of the mutation query in the BackEnd
   * { data } - the return object
   * DELETE_USER - the query we created up there ^
   */
  const [deleteUser, { data }] = useMutation(DELETE_USER);

  return (
    <div>
      <h3>delete user:</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          deleteUser({
            variables: {
              id: userID,
            },
          });
          setUserID("");
        }}
      >
        <label>
          user id:
          <input value={userID} onChange={(e) => setUserID(e.target.value)} />
        </label>
        <button type="submit">Remove user</button>
      </form>
      {data && (
        <p>
          response: {data.deleteUser.code},{" "}
          {data.deleteUser.success ? "success" : "fail"},{" "}
          {data.deleteUser.message}
        </p>
      )}
    </div>
  );
};

export default DeleteUser;

const Wrapper = styled.div``;
