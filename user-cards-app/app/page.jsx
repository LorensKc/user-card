'use strict';
'use client';

import { useEffect, useState, useMemo } from 'react';
import userService from './services/UserService.js';
import UserGrid from './components/UserGrid/UserGrid';
import FilterInput from './components/FilterInput/FilterInput';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAndSetUsers = async () => {
      setIsLoading(true); //Starting the download
      setError(null); //Resetting the previous error
      try {
        const fetchedUsers = await userService.fetchUsers();
        setUsers(fetchedUsers);
      } catch (err) {
        console.error("Failed to fetch users:", err);
        setError(err.message || 'Failed to fetch users');
        setUsers([]); //Clean up users in case of an error
      } finally {
        setIsLoading(false); //Completing the download (successful or not)
      }
    };
    fetchAndSetUsers();
  }, []); //The empty array of dependencies remains

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

  if(isLoading) {
    return <main className="container"><p>Loading users...</p></main>
  }
  if(error) {
    return <main className="container"><p>Error: {error}</p></main>
  }


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