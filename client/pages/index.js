import { gql } from "@apollo/client";
import client from "../lib/with-apollo";
import { ApolloProvider } from "@apollo/client";
import UserDetails from '../components/UserDetails';

export default function Users({ users }) {
  return (
    <ApolloProvider client={client}>
        <UserDetails userslist={users}/>
    </ApolloProvider>  
  );
}


export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    query Users {
      users(limit: 20, offset: 0) {
        name
        address
        email
        phone
      }
    }
    `,
  });

  return {
    props: {
      users: data.users,
    },
  };
}
