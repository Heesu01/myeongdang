const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and retrieval
 */

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Post management and retrieval
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The user ID
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: The user's name
 *                     example: John Doe
 */
router.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ]);
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieve a single user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: A single user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The user ID
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: The user's name
 *                   example: John Doe
 *       404:
 *         description: A user with the specified ID was not found
 */
router.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (userId === 1) {
    res.json({ id: 1, name: 'John Doe' });
  } else if (userId === 2) {
    res.json({ id: 2, name: 'Jane Doe' });
  } else {
    res.status(404).send('User not found');
  }
});

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Log in a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's username
 *                 example: johndoe
 *               password:
 *                 type: string
 *                 description: The user's password
 *                 example: secret
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Authentication token
 *                   example: abc123token
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // 간단한 인증 로직 예제
  if (username === 'johndoe' && password === 'secret') {
    res.json({ token: 'abc123token' });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's username
 *                 example: johndoe
 *               password:
 *                 type: string
 *                 description: The user's password
 *                 example: secret
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 */
router.post('/signup', (req, res) => {
  const { username, password } = req.body;
  // 간단한 회원가입 로직 예제
  if (username && password) {
    res.status(201).send('User created successfully');
  } else {
    res.status(400).send('Bad request');
  }
});

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Retrieve a list of posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: A list of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The post ID
 *                     example: 1
 *                   title:
 *                     type: string
 *                     description: The post title
 *                     example: First Post
 *                   content:
 *                     type: string
 *                     description: The post content
 *                     example: This is the content of the first post.
 */
router.get('/posts', (req, res) => {
  res.json([
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' }
  ]);
});

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Retrieve a single post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The post ID
 *     responses:
 *       200:
 *         description: A single post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The post ID
 *                   example: 1
 *                 title:
 *                   type: string
 *                   description: The post title
 *                   example: First Post
 *                 content:
 *                   type: string
 *                   description: The post content
 *                   example: This is the content of the first post.
 *       404:
 *         description: A post with the specified ID was not found
 */
router.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  if (postId === 1) {
    res.json({ id: 1, title: 'First Post', content: 'This is the content of the first post.' });
  } else if (postId === 2) {
    res.json({ id: 2, title: 'Second Post', content: 'This is the content of the second post.' });
  } else {
    res.status(404).send('Post not found');
  }
});

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The post title
 *                 example: New Post
 *               content:
 *                 type: string
 *                 description: The post content
 *                 example: This is the content of the new post.
 *     responses:
 *       201:
 *         description: Post created successfully
 *       400:
 *         description: Bad request
 */
router.post('/posts', (req, res) => {
  const { title, content } = req.body;
  // 간단한 게시물 생성 로직 예제
  if (title && content) {
    res.status(201).send('Post created successfully');
  } else {
    res.status(400).send('Bad request');
  }
});

module.exports = router;


