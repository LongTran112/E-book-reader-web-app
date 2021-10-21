# Team 3

# E-book-reader-web-app
## A web application for reading, editing E-book


- Nodejs as back-end, EJS as view templates
- Cloud MongoDB as database
- Vanilla HTML, CSS, Javascript for front-end

## Guide to installation

- Pull the master branch to your local git.

- Navigate to folder api and type npm install in terminal to install Nodejs plug-ins for the project
- Then npm start to start the project at http://localhost:5000/home

```sh
cd api
npm install
npm start
```

- You also may need to type npm install ejs to view with ejs templates 

```sh
npm install ejs
```

## Private cloud database location
- Can only be accessible after invitation.
- All CRUD operations can be performed on DB
https://cloud.mongodb.com/v2/615c0a3fc78e2f08243905b7#metrics/replicaSet/615c0b659757291fcd0fca57/explorer/books/books/find
| Id | Title | Author | Description | Content
| ------ | ------ | ------| ----- | -----|
| ------ | ------ | ---------| ----------------- | -----------|

## API End-points

| End-point | HTTP verb | Purposes 
| ------ | ------ | ------|
| /home | GET | Navigate to homepage
| /writer | GET | Navigate to writer page
| /api/books | GET | Retrieve list of books
| /api/books | POST | Create a new book
| /api/books/:id | GET | Navigate to reader page to view a book




