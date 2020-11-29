import { useQuery, gql } from '@apollo/client';

import SampleButton from "../ui/sample_button";

import styled from 'styled-components';

// this is the query
/***
 * @returns UserObject[]
 */
const GET_ALL_USERS = gql`
  query GetAllUsers {
    users {
      name
      email
      id
    }
  }
`;

const GetAllUsers = () => {
  /* ++++ GraphQL Apollo Query query hook ++++ */
  /**
   * loading - while the query waits for response (Boolean)
   * error - if there is an error (Object?)
   * data - the response
   * refetch - if we want to "refetch" (Function)
   * GET_ALL_USERS - the query we created up there ^
   */
  const { loading, error, data, refetch } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :/</p>; 

  return (
    <Wrapper>
      <h3>GetAllUsers:</h3>
      <div>
        <h2>this is all the data in the server:</h2>
        <ul>
          {data.users.map(user => <li key={user.id + user.name}>
            <p>user: {user.name}</p>
            <p>email: {user.email}</p>
            <p>id: {user.id}</p>
          </li>)}
        </ul>
        <SampleButton
          onClick={() => refetch()}
          size='small'
          background='rgba(127,103,218,1)'
          label='Button'
        >
          refetch
        </SampleButton>
      </div>
    </Wrapper>
    );
}

export default GetAllUsers;

const Wrapper = styled.div`

`;