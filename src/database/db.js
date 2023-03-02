const { Sequelize } = require('sequelize')
const { db } = require('../../config')
const PostModel = require('../models/post')

const sequelize = new Sequelize(db.user, db.name, db.password, {
  host: db.host,
  port: db.port,
  dialect: db.dialect,
})


const Post = PostModel(sequelize, Sequelize)
sequelize.sync().then(console.log('DB is synced'))

module.exports = {Post}