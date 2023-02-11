import React,{useState} from 'react';
import styles from "../styles/Users.module.css";
import { gql, useQuery } from "@apollo/client";
import UserList from "./UserList.js";
const UserDetails = ({userslist}) => {
    const [usersData,setUserData]=useState(userslist);
    const [loadMore, setLoadMore] = useState(false);
    const [offset, setOffset] = useState(0);
    const limit = 20;
    const query = gql`
    query Users ($limit: Int!, $offset: Int!) {
        users(limit: $limit, offset: $offset) {
          name
          address
          email
          phone
        }
      }
  `;

  const { data, fetchMore } = useQuery(query, {
    variables: { limit: limit, offset: offset },
  });

  if (data && loadMore) {
    setLoadMore(false);
    setUserData(usersData.concat(data.users));
  }


  const handleLoadMore=()=>{
    console.log('handleLoadMore');
    setLoadMore(true);
    setOffset(offset + limit);
    try {
        fetchMore({
            variables: {
            limit: limit,
            offset: offset,
            },
        });
        } catch (err) {
        console.log(`Error! ${err.message}`);
        }
}
    return (
      <div className={styles.container}>
       <main className={styles.main}>
   
        <UserList user={usersData}></UserList>
         <button className={styles.load_more_button} onClick={handleLoadMore}>
          Load more
        </button>
      
      </main>
     </div>
    )
}
export default UserDetails;