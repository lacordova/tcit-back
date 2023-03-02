module.exports = (Sequelize, DataTypes) => {
  const Post = Sequelize.define('User', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })
  return Post
}
