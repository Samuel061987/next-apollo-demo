import React from 'react';
import styles from "../styles/Users.module.css";
const UserList = ({user}) => {
    return(
        <div className={styles.grid}>
        {user && user.map((data,index) => (
            <div key={index} className={styles.card}>
              <h3>{data.name}</h3>
              <p data-testid="phone">
              Phone: {data.phone}
              </p>
              <p data-testid="address">
              Address: {data.address}
              </p>
              <p data-testid="email">
              Email: {data.email}
              </p>
            </div>
          ))}
         </div>
    )
}
export default UserList;