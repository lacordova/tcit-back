const PostController = {}
const { Post } = require('../database/db')

PostController.create = (req, res, next) => {
  Post.create({
    name: req.body.name,
    description: req.body.description
  }).then(post => {
    res.json(post)
  }).catch(next)
}

PostController.getAll = (req, res, next) => {
  Post.findAll().then(post => {
    res.json(post)
  }).catch(next)
}

PostController.delete = (req, res, next) => {
    
  const idParam = req.params.id
  Post.findByPk(idParam).then(post => {
    Post.destroy({
      where: {
        id: idParam
      }
    }).then(() => {
      res.json(post)
    }).catch(next)
  })
}

module.exports = PostController