'use strict';
import React from 'react';
import UserCard from './UserCard';
import styles from './UserGrid.scss';
/** @typedef {import('../models/User').User} User */

/**
 * @param {object} props
 * @param {User[]} props.users
 */
const UserGrid = ({ users }) => {
  if (!users || users.length === 0) {
    return <p className={styles.noResults}>No users found</p>;
  }

  return (
    <div className={styles.grid}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserGrid;