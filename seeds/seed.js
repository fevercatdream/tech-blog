// TODO: update this file
const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogPost.json');
const commentData = require('./comment.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blogPost of blogData) {
    await BlogPost.create(blogPost);
  }

  for (const comment of commentData) {
    await Comment.create(comment);
  }

  process.exit(0);
};

seedDatabase();