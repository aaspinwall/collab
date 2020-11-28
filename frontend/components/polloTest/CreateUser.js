import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

import styled from 'styled-components';


const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!){
    addUser(user: {name: $name, email: $email}){
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
`

const CreateUser = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [addUser, { data }] = useMutation(ADD_USER);

  console.log('data',data)

  return (
    <div>
      <h3>add user:</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          addUser({ 
            variables: { 
              name: userName,
              email: userEmail,
            } 
          });
          setUserEmail('');
          setUserName('');
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
      {data && <div>
        <p>response: {data.addUser.code}, {data.addUser.success ? 'success' : 'fail'}, {data.addUser.message}</p>
        {data.addUser.user && <p>userAdded: {data.addUser.user.name}, {data.addUser.user.email}, {data.addUser.user.id}</p>}
        </div>}
    </div>
  );
}

export default CreateUser;

const Wrapper = styled.div`

`;