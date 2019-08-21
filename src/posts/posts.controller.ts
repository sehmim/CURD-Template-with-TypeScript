import * as express from 'express';
import { IPost } from 'interface/IPost'

export default class PostsController {
    private router = express.Router();
    private path = '/post'

    // Connect to DB
    private posts: IPost[] = [
        {
            author: 'Marcin',
            content: 'Dolor sit amet',
            title: 'Lorem Ipsum',
        }
    ];

    constructor() {
        this.intializeRoutes()
    }
    public intializeRoutes() {
        this.router.get(this.path, this.getAllPosts)
        this.router.post(this.path, this.createAPost)
    }

    // All Posts
    public getAllPosts = (request: express.Request, response: express.Response) => {
        response.send(this.posts);
    }

    // Post Request
    public createAPost(request: express.Request, response: express.Response) {
        const post: IPost = request.body;
        response.send(post)
    }
}   