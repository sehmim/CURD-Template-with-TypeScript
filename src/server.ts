import App from './app';
import PostsController from './posts/posts.controller';

import { validateEnv } from './utils/validateEnvs';

validateEnv();
const app = new App(
    [
        new PostsController(),
    ],
    5000,
);

app.listen();