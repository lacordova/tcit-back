const router = require('express').Router()
const PostController = require('../controllers/post-controller')

router.route('/')
  .post(PostController.create)
  .get(PostController.getAll)

router.route('/:id')
  .delete(PostController.delete)

module.exports = router