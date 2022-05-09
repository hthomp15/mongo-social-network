# MongoDB-Social-Network

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Tutorial](#tutorial)
* [Author](#author)

## Description
This is a social network built on top of MongoDB. The goal is to create an API which can handle a large ampount of unstructured data.

The API is structured as follows:
- Models: 
    - Users: Includes CRUD operations for users and the ability to add and remove friends.
    - Thoughts: Includes CRUD operations for posts and the ability to add and remove reactions. Reactions are a subdocument schema in the Thoughts model. 
- Routes:
    - Users: GET, POST, PUT, and DELETE /api/users.
        - POST Syntax: ` { "username": "hthomp", "email": "hthompson@email.com" }`
    - Thoughts: GET, POST, PUT, and DELETE /api/thoughts.
        - POST Syntax: ` { "thoughtText": "This is a cool API application", "username": "hthomp", "userId": "5c9f8f8f8f8f8f8f8f8f8f8" }`
    - Reactions: POST and DELETE /api/thoughts/:thoughtsId/reactions/:reactionId.
        - POST Syntax: ` { "reactionBody": "Thats true I love how this backend works!", "user": "aaron17" }`
    - Friends: POST and DELETE /api/users/:id/friends/:friendsId.
        - POST Syntax: No Body
## Installation
Clone the repository and make sure you're in the root directory. Then run the following command: `npm install` and `npm start` to install dependencies and start the server.

After the server is running, you can go to the following URL: `http://localhost:3001` or connect with and app such as Insomnia to make requests to the server.

## Tutorial
Feel free to check out the tutorial video which will walk you through the API. In the video I start the server from my terminal and make all the requests on Insomnia. Check out the tutorial [here](https://drive.google.com/file/d/1OmqxzzhkN2bbwzIpOS0PhYgd3yJo4xyF/view?usp=sharing)


## Author
This app was created by [Haile_Thompson](https://github.com/hthomp15). Checkout my github profile and feel free to contact me if you have any questions.

