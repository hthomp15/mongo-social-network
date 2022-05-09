# MongoDB-Social-Network

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Tutorial](#tutorial)
* [Questions](#questions)

## Description
This is a social network built on top of MongoDB. The goal is to create an API which can handle a large ampount of unstructured data.

The API is structured as follows:
- Models: 
    - Users: Includes CRUD operations for users and the ability to add and remove friends.
    - Thoughts: Includes CRUD operations for posts and the ability to add and remove reactions. Reactions are a subdocument schema in the Thoughts model. 
- Routes:
    - /users: Includes CRUD operations for users (GET, POST, PUT, DELETE) /api/users.
        - POST Syntax: ` { "username": "hthomp", "email": "hthompson@email.com" }`
    - /thoughts: Includes CRUD operations for thoughts (GET, POST, PUT, DELETE) /api/thoughts.
        - POST Syntax: ` { "thoughtText": "This is a cool API application", "username": "hthomp", "userId": "5c9f8f8f8f8f8f8f8f8f8f8" }`
    - /reactions: Includes the ability to add and delete reactions from a thought /api/thoughts/:thoughtsId/reactions/:reactionId.
        - POST Syntax: ` { "reactionBody": "Thats true I love how this backend works!", "user": "aaron17" }`
    - /friends: Includes the ability to add and delete friends from a user /api/users/:id/friends/:friendsId.
        - POST Syntax: No Body
## Installation
Clone the repository and make sure you're in the root directory. Then run the following command: `npm install` and `npm start` to install dependencies and start the server.

After the server is running, you can go to the following URL: `http://localhost:3001` or connect with and app such as Insomnia to make requests to the server.

## Tutorial
Check out the video tutorial [here](


## Author
This app was created by [Haile_Thompson](https://github.com/hthomp15). Checkout my github profile and feel free to contact me if you have any questions.

