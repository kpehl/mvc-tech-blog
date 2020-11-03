// An index file to gather the API routes and export them for use

// Dependencies
// Server connection
const router = require('express').Router();
// User Routes
const userRoutes = require('./user-routes');
// Post Routes
const postRoutes = require('./post-routes');
// Comment Routes
const commentRoutes = require('./comment-routes');

// Define route path for the API to use, e.g. api/users/
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

// Export the router
module.exports = router;