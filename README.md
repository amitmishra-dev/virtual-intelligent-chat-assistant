# virtual-intelligent-chat-assistant

## Tech Stack :-
- HTML
- CSS
- JavaScript
- React-Js
- Bootstrap
- Redux
- Express
- MongoDb
- GIT

## Prerequisties
Install vs-code

- [Click here to install vs-code]( https://code.visualstudio.com/download)

Install Node

- [Click here to install nodejs]( https://nodejs.org/en/)
## Cloning and Running the Appliction in local

Clone the project into local Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
  npm install
```
Run client side
```bash
  npm start
```
Run Backend side
````bash
    npm install express
````    
````bash
    npm install cors
````    

```bash
  npm run start
```


## Backend Information

### API- Routes:-
API Routes

'Users Api'

POST : http://localhost:5000/users/create API routes for users to create accounts and login to the application

GET : http://localhost:5000/users  An API route that allows to get all users

GET : http://localhost:5000/users/{id}  An API route that allows to get all users by userId

PATCH : http://localhost:5000/users An API route that allow users to modify user information

DELETE : http://localhost:5000/users/{id} An API route that allows admin to delete user by userId

POST : http://localhost:5000/users/login (username, password) An API route that allow users sign up

'Books API'

POST : http://localhost:5000/books/create API routes for users to create accounts and login to the application


GET : http://localhost:5000/books An API route that allow users to get all books in the library

GET : http://localhost:5000/books/{bookId} An API route that fetch a specific book

PATCH : http://localhost:5000/books/{id} An API route that to modify book in the library

DELETE : http://localhost:5000/books:id An API route that admin to delete books

'Need to implement'

POST : http://localhost:5000/books/borrow An API route that allow user to borrow a book

GET : http://localhost:5000/books/logs/{userId} An API route that allows users see rented book history
 
