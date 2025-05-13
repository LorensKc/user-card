'use strict';
'use client';

import { useEffect, useState, useMemo } from 'react';
import userService from '../services/UserService';
import UserGrid from '../components/UserGrid/UserGrid';
import FilterInput from '../components/FilterInput/FilterInput';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAndSetUsers = async () => {
      const fetchedUsers = await userService.fetchUsers();
      setUsers(fetchedUsers);
    };
    fetchAndSetUsers();
  }, []);

  const handleFilterChange = (value) => {
    setSearchTerm(value);
  };

  const filteredUsers = useMemo(() => {
    if (!searchTerm.trim()) {
      return users;
    }
    const lowercasedFilter = searchTerm.toLowerCase();
    return users.filter((user) => {
      const searchInObject = (obj) => {
        for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            if (typeof value === 'string' && value.toLowerCase().includes(lowercasedFilter)) {
              return true;
            }
            if (typeof value === 'object' && value !== null) {
              if (searchInObject(value)) {
                return true;
              }
            }
          }
        }
        return false;
      };
      return searchInObject(user);
    });
  }, [users, searchTerm]);

  useEffect(() => {
    document.title = 'Clients List';
  }, []);


  return (
    <main className="container">
      <h1>User cards</h1>
      <FilterInput
        value={searchTerm}
        onChange={handleFilterChange}
        placeholder="Search by name, email, etc..."
      />
      <UserGrid users={filteredUsers} />
    </main>
  );
};

export default HomePage;