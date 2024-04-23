# Single Page Blog App Server

## How to run
This server was created with json-server. This server only have a Posts routes.

## Installation
Install dependencies
```bash
npm install
```

finally start the server,
```bash
npm run start
```
Server will be run on http://localhost:9000 \
you can change port package.json file from start script.

## Instructions
Retrieve all posts (GET):
```bash
GET http://localhost:9000/posts
```


Retrieve single post (GET):
```bash
GET http://localhost:9000/posts/id
```


Create post (POST):
```bash
POST http://localhost:9000/posts title="Test" description="Single page blog app test."
```

Edit post (PUT):
```bash
PUT http://localhost:9000/posts/id title="Test edit" description="Single page blog app test. Edit!"
```

Delete post (DELETE):
```bash
DELETE http://localhost:9000/posts/id
```

## Links
[json-server by typicode](https://github.com/typicode/json-server)

## contact
[facabook](https://www.facebook.com/limon.btcz) \
email: mdlimon0175@gmail.com