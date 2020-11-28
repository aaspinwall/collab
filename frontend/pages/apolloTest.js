import { useQuery, gql } from '@apollo/client';

import styled from 'styled-components';

const GET_ALL_USERS = gql`
  query GetAllUsers {
    users {
      name
      email
      id
    }
  }
`;

const ApolloTest = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log('data',data)
  return (
    <Wrapper>
      <h1>ApolloTest</h1>
      <div>
        <ul>
          {data.users.map(user => <li key={user.id + user.name}>
            <p>user: {user.name}</p>
            <p>email: {user.email}</p>
            <p>id: {user.id}</p>
          </li>)}
        </ul>
      </div>
    </Wrapper>
    );
}

export default ApolloTest;

const Wrapper = styled.div`

`;