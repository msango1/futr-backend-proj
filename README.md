# Futr-ai backend project

### Project Overview
The aim of the project was to create an api which makes use of all CRUD operations. Allowing users to fetch all books, fetch books by ID, create new books, edit books & delete books.

### Project Initializatoin
The following dependencies are used in this project:

- @types/express
- @types/node
- @types/swagger-jsdoc
- @types/swagger-ui-express
- express
- nodemon
- swagger-jsdoc
- swagger-ui-express
- ts-node
- typescript

To install them run `npm init` when project has been cloned

### Running Book API

To run the API run: `npm run dev`

This will start the node server at: [http://localhost:3000/](http://localhost:3000/)

These are the active endpoints:
- Get: /api/books
- Get: /api/books/:id
- Post: /api/books
- Put: /api/books/:id
- Delete: /api/books/:id 
- Swagger: /api/docs

For a more detailed breakdown of active endpoints visit the swagger uI at: [Books API Swagger UI](http://localhost:3000//api/docs)

### Testing endpoints

You can use a browser based API Tester to test each of the endpoints or a dedicated program.

---
## M. Sangobiyi