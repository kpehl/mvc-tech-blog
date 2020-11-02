// An index file to gather the models and export them for use

// User model
const User = require('./User');
// Post model
const Post = require('./Post');
// Comment model
const Comment = require('./Comment');

// Create associations between the models
// User-Post relationship
User.hasMany(Post, {
    foreignKey: 'user_id'
});
//Post-User relationship
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// Comment-User relationship
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// Comment-Post relationship
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// User-Comment relationsihp
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// Post-Comment relationship
Post.hasMany(Comment, {
    foreignKey: 'post_id'
})

// Export the modules
module.exports = { User, Post, Comment };