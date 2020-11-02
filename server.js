// Server for MVC Tech Blog

// Dependencies
// path module
const path = require('path');
// dotenv file for sensitive configuration information
require('dotenv').config();
// Express.js server
const express = require('express');
// All routes as defined in the controllers folder
const routes = require('./controllers/');
// Sequelize connection to the database
const sequelize = require('./config/connection');

// Initialize the server
const app = express();
// Define the port for the server
const PORT = process.env.PORT || 3001;

// Have Express parse JSON and string data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Give the server the path to the routes
app.use(routes);

// Turn on connection to db and then to the server
// force: true to reset the database and clear all values, updating any new relationships
// force: false to maintain data - aka normal operation
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });