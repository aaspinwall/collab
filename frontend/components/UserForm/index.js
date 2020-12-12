import { createRef } from "react";
import { gql } from "@apollo/client";
import ApolloClient from "../../apollo";

const UserForm = () => {
  const nickName = createRef(null);
  const email = createRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    testInput();
  };

  const testInput = () => {
    console.log(nickName.current.value);

    return ApolloClient.mutate({
      mutation: gql`
		mutation {
		addUser(user: {name: "${nickName.current.value}", email: "${email.current.value}"}){
		  user {
			name
			email
			id
		  }
		  code
		  message
		}	
	  }`,
    }).then((res) => console.log(res));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nickname" ref={nickName} />
        <input type="text" placeholder="Email" ref={email} />
        <button>
          <input type="submit" />
        </button>
      </form>
    </>
  );
};

export default UserForm;
