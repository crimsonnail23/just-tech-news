const User = require('./User');
const Post = require('./Post');

//create assoications.
User.hasMany(Post,{
    foreignKey: 'user_id'
});

Post.belongsTo(User,{
    foreinKey: 'user_id'
});

module.exports = { User,Post };