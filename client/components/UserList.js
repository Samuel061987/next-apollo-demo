import React from 'react';
import styles from "../styles/Users.module.css";
const UserList = ({user}) => {
    return(
        <div className={styles.grid}>
        {user.map((data,index) => (
            <div key={index} className={styles.card}>
              <h3>{data.name}</h3>
              <p>
              Phone: {data.phone}
              </p>
              <p>
              Address: {data.address}
              </p>
              <p>
              Email: {data.email}
              </p>
            </div>
          ))}
         </div>
    )
}
export default UserList;