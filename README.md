# &#35; Eat Da Sushi!&nbsp;&nbsp;<img src="https://img.icons8.com/color/48/000000/sushi.png">&nbsp;<img src="https://img.icons8.com/color/48/000000/sashimi.png">
This project is a sushi logger with MySQL, Node.js, Express, Handlebars (npm packages) and uses ORM (Object-Relational Mapping). This project also utilizes the MVC (Model–View–Controller) design pattern, Node.js and MySQL to query and route data. Handlebars generates the HTML and this application is deployed to Heroku via JawsDB.

## Getting Started:
* [https://katbytes-eat-da-sushi.herokuapp.com/](https://katbytes-eat-da-sushi.herokuapp.com/sushis) (`Heroku`)

## In Action:
<img src="https://raw.githubusercontent.com/katbytes/Eat-Da-Sushi/master/public/assets/imgs/sushi.gif" alt="demo">

## Technologies Used:
* Visual Studio Code - IDE
* Node.js
* ORM - Object-Relational Mapping
* MVC (Model-View-Controller) - Software Architecture Pattern
* MySQL (Workbench) - Relational Database Management System
* Express npm package - https://expressjs.com/
* Express-Handlebars npm package - https://www.npmjs.com/package/express-handlebars
* Nodemon npm package - https://www.npmjs.com/package/nodemon
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
