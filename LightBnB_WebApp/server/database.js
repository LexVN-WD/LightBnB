const properties = require('./json/properties.json');
const users = require('./json/users.json');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function (email) {

  const queryString = `
  SELECT *
  FROM users
  WHERE users.email = $1
  `;

  return pool
    .query(queryString, [email])
    .then((result) => {
      if (!result.rows) {
        return null;
      }
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function (id) {

  const queryString = `
  SELECT *
  FROM users
  WHERE users.id = $1
  `;

  return pool
    .query(queryString, [id])
    .then((result) => {
      if (!result.rows) {
        return null;
      }
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = function (user) {

  const queryString = `
  INSERT INTO users (name, password, email)
  VALUES ($1, $3, $2)
  RETURNING *;
  `;

  const values = [user.name, user.email, user.password];

  return pool
    .query(queryString, values)
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function (guest_id, limit = 10) {

  const queryString = `
  SELECT properties.*, reservations.*, avg(rating) as average_rating
  FROM properties 
  JOIN reservations ON properties.id = reservations.property_id
  JOIN property_reviews ON properties.id = property_reviews.property_id
  WHERE reservations.guest_id = $1
  GROUP BY reservations.id, properties.id
  ORDER BY start_date ASC
  LIMIT $2;
  `;

  const values = [guest_id, limit];

  return pool
    .query(queryString, values)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
// getAllProperties
const getAllProperties = (options, limit = 10) => {
  
  const queryParams = [];

  let queryString = `      
  SELECT properties.*, AVG(property_reviews.rating) as average_rating
  FROM properties
  JOIN property_reviews ON properties.id = property_id
  `;

  // PARAMETER LOOKUP BY CITY NAME
  if (options.city) {
    queryParams.push(`%${options.city.slice(1)}%`);
    queryString += `WHERE city LIKE $${queryParams.length} `;
  }

  // PARAMETER LOOKUP BY OWNER ID LOGIN
  if (options.owner_id) {
    queryParams.push(`${options.owner_id}`);
    queryString += `WHERE properties.owner_id = $${queryParams.length} `;
  }

  // PARAMETER LOOKUP BY MINPRICE AND MAXPRICE
  const min = options.minimum_price_per_night;
  const max = options.maximum_price_per_night;

  // Filter properties by Min price
  if (min) {
    let minPrice = Number(min) * 100;
    queryParams.push(`${minPrice}`);
    queryString += `AND cost_per_night >= $${queryParams.length}`;
  }

  // Filter properties by Max price
  if (max) {
    let maxPrice = Number(max) * 100;
    queryParams.push(`${maxPrice}`);
    queryString += `AND cost_per_night <= $${queryParams.length} `;
  }


  // Filter properties by rating
  queryString += `
  GROUP BY properties.id
  `;

  // Filter properties by minimum rating
  if (options.minimum_rating) {

    queryParams.push(options.minimum_rating);

    queryString += `
    HAVING avg(property_reviews.rating) >= $${queryParams.length} 
    `;
  }

  queryParams.push(limit);
  queryString += `
  ORDER BY cost_per_night
  LIMIT $${queryParams.length};
  `;

  return pool
    .query(queryString, queryParams)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.getAllProperties = getAllProperties;

/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function (property) {
  const queryString = `
  INSERT INTO properties (
    owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, street, city, province, post_code, country, parking_spaces, number_of_bedrooms, number_of_bathrooms)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
  RETURNING *;
  `;

  const values = [
    property.owner_id,
    property.title,
    property.description,
    property.thumbnail_photo_url,
    property.cover_photo_url,
    property.cost_per_night,
    property.street,
    property.city,
    property.province,
    property.post_code,
    property.country,
    property.parking_spaces,
    property.number_of_bedrooms,
    property.number_of_bathrooms,
  ];

  return pool
    .query(queryString, values)
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.addProperty = addProperty;