"use strict";

/** @typedef {import('../models/User').User} User */

class UserService {
  constructor() {
    this.apiUrl = "https://jsonplaceholder.typicode.com/users";
  }

  /**
   * Fetches users from the API.
   * @returns {Promise<User[]>} A promise that resolves to an array of users.
   */
  async fetchUsers() {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      /** @type {User[]} */
      const users = await response.json();
      return users;
    } catch (error) {
      console.error("Could not fetch users:", error);
      return []; // Return an empty array in case of an error
    }
  }
}


const userService = new UserService();
export default userService;
