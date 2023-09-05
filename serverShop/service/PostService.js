import Post from "../models/PostModel.js";
import fileService from "./fileService.js";

class PostService {
    async create(post, picture) {

        const fileName = fileService.saveFile(picture)

        const createdPost = await Post.create({...post, picture: fileName})

        return createdPost
    }

    async getAll() {
        const posts = await Post.find()

        return posts
    }

    async getOne(id) {
        if (!id) {
            throw new ERROR('не указан Id')
        }
        const post = await Post.findById(id)

        return post
    }

    async update(post) {
        if (!post._id) {
            throw new ERROR('не указан Id')
        }
        const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true})

        return updatePost
    }

    async delete(id) {
        if (!id) {
            throw new ERROR('не указан Id')
        }
        const post = await Post.findByIdAndDelete(id)

        return post
    }
}

export default new PostService()