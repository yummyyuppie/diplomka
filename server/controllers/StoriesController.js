const uuid = require('uuid')
const path = require('path');
const { readdirSync, rmSync } = require('fs');
const {Post} = require('../models/models')
const ApiError = require('../error/ApiError');
class StoriesController {
  async create(req, res, next) {
    try {
      let { title, content, slug,  author, isApproved = true } = req.body
      console.log(req.body)
      const isExists = await Post.findOne({ where: { slug } })
      if(isExists){
        return next(ApiError.badRequest('unique_post_slug_violation'))
      }
      const { thumbnail } = req.files
      let fileName = uuid.v4() + ".jpg"
      thumbnail.mv(path.resolve(__dirname, '..', 'static', fileName))
      const post = await Post.create({title, content, slug, author, thumbnail: fileName, isApproved});

      return res.status(200).json({message: 'success_add'})
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
  async delete(req, res, next) {
    try {
      const { id } = req.params
      const post = await Post.findOne({ where: { id } })

      if (!post) return next(ApiError.badRequest('post_does_not_exist'))

      const fileName = post.thumbnail;
      const dir = path.resolve(__dirname, '..', 'static')
      if (fileName && fileName.length > 0) {
        readdirSync(dir).filter(e => e === fileName).forEach(f => rmSync(`${dir}/${f}`))
      }
      await Post.destroy({ where: { id } })
      return res.status(200).json({message: 'post_successfully_deleted'})
    }
    catch (e){
      next(ApiError.badRequest(e.meta))
    }
  }
  async approve(req, res, next) {
    try{
      const { id } = req.params
      const post = await Post.findOne({ where: { id } })

      if (!post) return next(ApiError.badRequest('post_does_not_exist'))

      await Post.update({ isApproved: true }, {where: {id}})
      return res.status(200).json({message: 'post_successfully_approved'})
    }
    catch (e){
      next(ApiError.badRequest(e.message))
    }
  }
  async getAllPosts(req, res, next){
    try{
      let {limit, page} = req.query
      page = page || 1
      limit = limit || 9
      let offset = page * limit - limit
      const posts = await Post.findAndCountAll({where: {isApproved: true}, limit, offset})

      return res.json(posts)
    }
    catch (e){
      return next(ApiError.badRequest(e.message))
    }
  }
  async getPostById(req, res, next){
    try{
      const {id} = req.params
      const post = await Post.findOne(
        {
          where: { id },
        },
      )
      return res.json(post)
    }
    catch (e){
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new StoriesController()