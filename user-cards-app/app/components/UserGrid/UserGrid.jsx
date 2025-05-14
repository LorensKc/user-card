'use strict';
import React from 'react';
import UserCard from '../UserCard/UserCard';
import './UserGrid.scss';
/** @typedef {import('../models/User').User} User */

/**
 * @param {object} props
 * @param {User[]} props.users
 */
const UserGrid = ({ users }) => {
  if (!users || users.length === 0) {
    return <p className="noResults">No users found</p>;
  }

  return (
    <div className="grid-wrapper">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserGrid;