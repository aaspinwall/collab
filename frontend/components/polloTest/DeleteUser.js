import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

import styled from 'styled-components';


const DELETE_USER = gql`
  mutation DeleteUser($id: ID!){
    deleteUser(id: $id){
      success
      code
      message
    }
  }
`

const DeleteUser = () => {
  const [userID, setUserID] = useState('');
  const [deleteUser, { data }] = useMutation(DELETE_USER);
  return (
    <div>
      <h3>delete user:</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          deleteUser({ 
            variables: { 
              id: userID,
            } 
          });
          setUserID('');
        }}
      >
        <label>
          user id:
          <input
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
          />
        </label>
        <button type="submit">Remove user</button>
      </form>
      {data && <p>response: {data.deleteUser.code}, {data.deleteUser.success ? 'success' : 'fail'}, {data.deleteUser.message}</p>}
    </div>
  );
}

export default DeleteUser;

const Wrapper = styled.div`

`;