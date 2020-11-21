# Library-App
this is a library project back end API application using node js Framework
Build Setup

    Clone repository $ git clone https://github.com/ismoyo23/Library-App.git

    Install depedencies

# with npm
$ npm install

# or with yarn
$ yarn install


DB_HOST      = 'localhost'
DB_USER      = 'root'
DB_PASSWORD  = 'xxx'
DB_DATABASE  = 'dbname'

    Start API server

$ yarn start

Stacks

    NodeJS
    MySQL
    ExpressJS

Dependencies

    expressjs - The server for handling and routing HTTP requests
    morgan - a HTTP request logger middleware for Node.js. It simplifies the process of logging requests to your application
    dotenv - is a zero-dependency module that loads environment variables from a .env file into process.env
    mysql - NodeJs driver for MySQL
    body-parser - Node.js body parsing middleware
    nodemon - is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
    passoword-hash -is a node.js library to simplify use of hashed passwords
    multer -is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency
    
Aplication Structure

    app.js - Entry point of our aplication
    src/config - This folder contain configuration files of our app, such as mysql connection
    src/models - This folder containt files that define query of MysQL
    src/routes - Route of our app going here
    src/helpers - This folder contain file that help you simplify your code such as define the error handling
    src/controllers - This folder contain configuration files that links Models to Route
    

    
 COPYRIGHT BY M ISMOYO SETYONOWIDAGDO
