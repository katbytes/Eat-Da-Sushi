# &#35; Eat Da Sushi!&nbsp;&nbsp;<img src="https://img.icons8.com/color/48/000000/sushi.png">&nbsp;<img src="https://img.icons8.com/color/48/000000/sashimi.png">
This activity is a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. This application will use Express to handle routing and is deployed to Heroku.

## Getting Started:
* [https://katbytes-eat-da-sushi.herokuapp.com/](https://katbytes-eat-da-sushi.herokuapp.com/sushis)(`Heroku`)
* https://github.com/katbytes/Eat-Da-Sushi/ (`GitHub`)

## In Action:
<img src="https://raw.githubusercontent.com/katbytes/Eat-Da-Sushi/master/public/assets/imgs/sushi.gif" alt="demo">
`Devouring sushi rolls...`&#8673;

## Technologies Used:
* Visual Studio Code - IDE
* Node.js
* ORM - Object-Relational Mapping
* MySQL (Workbench) - Relational Database Management System
* Express npm Package - https://expressjs.com/
* Express-Handlebars npm Package - https://www.npmjs.com/package/express-handlebars
* Nodemon npm Package - https://www.npmjs.com/package/nodemon
* Dotenv npm package - https://www.npmjs.com/package/dotenv
* jQuery - JavaScript CDN
* AJAX - Asynchronous JavaScript And XML
* JSON - JavaScript Object Notation
* Heroku -  Cloud Platform Programming Language Support
* JawsDB MySQL - MySQL Database for Heroku
* Bootstrap - HTML, CSS, and JS Framework

### Basic Architecture:
```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── sushi_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── sushi.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── sushi_style.css
│       └── img
│           └── sushi.png
│   
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
* [Detailed Instructions](https://katbytes.github.io/Eat-Da-Sushi/public/assets/misc/homework_instructions)

## About the Author:
[Katherine J. Bell](https://github.com/katbytes)
