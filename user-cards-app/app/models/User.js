'use strict';

/**
 * @typedef {object} Geo
 * @property {string} lat
 * @property {string} lng
 */

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} suite
 * @property {string} city
 * @property {string} zipcode
 * @property {Geo} geo
 */

/**
 * @typedef {object} Company
 * @property {string} name
 * @property {string} catchPhrase
 * @property {string} bs
 */

/**
 * Represents a user.
 * @typedef {object} User
 * @property {number} id
 * @property {string} name
 * @property {string} username
 * @property {string} email
 * @property {Address} address
 * @property {string} phone
 * @property {string} website
 * @property {Company} company
 */
