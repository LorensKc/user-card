'use strict';
import React from 'react';
import styles from './UserCard/UserCard.scss';
/** @typedef {import('../models/User').User} User */

/**
 * @param {object} props
 * @param {User} props.user
 */
const UserCard = ({ user }) => {
  return (
    <div className={styles.card}>
      <h2>{user.name} (@{user.username})</h2>
      <p><strong>Email:</strong> <a href={`mailto:${user.email}`}>{user.email}</a></p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Wedsite:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
      <p>
        <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
      </p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><em>"{user.company.catchPhrase}"</em></p>
    </div>
  );
};

export default UserCard;