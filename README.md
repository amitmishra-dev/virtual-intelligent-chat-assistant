# Virtual-intelligent-chat-assistant
 Platform for agencies to onboard a wave of new virtual assistants for government services. 

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

Install MongoDb

-[Click here to install mongodb Compass](https://downloads.mongodb.com/compass/mongodb-compass-1.32.2-darwin-x64.dmg)

## Cloning and Running the Appliction in local

Clone the project into local Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```
## Frontend Information
#### For frontend the npm packages are used:-
To create react folder
````bash
npx create-react-app foldername
`````
Run client side
```bash
npm start
```
Import redux react-redux
```bash
npm install redux react-redux
```
Import react-router-dom
```bash
npm install react-router-dom 
```
Import bootstrap
```bash
npm install --save bootstrap 
import 'bootstrap/dist/css/bootstrap.css';// add to index.js
```
Import axios
```bash
npm install axios 
```
Import material-ui/core and materila-ui/lab
```bash
npm install @material-ui/core @material-ui/lab
```
Import redux-thunk
```bash
npm install --save redux-thunk
```

** Frontend is running on http://localhost:3000

## Backend Information
 
#### For backend the npm packages are used:-
 Run Backend side
````bash
npm install express
````    
````bash
npm install cors
````    
### API- Routes:-

#### Users Api
````bash
POST : http://localhost:5000/users/create API routes for users to create accounts and login to the application

GET : http://localhost:5000/users  An API route that allows to get all users

GET : http://localhost:5000/users/{id}  An API route that allows to get all users by userId

PATCH : http://localhost:5000/users An API route that allow users to modify user information

DELETE : http://localhost:5000/users/{id} An API route that allows admin to delete user by userId

POST : http://localhost:5000/users/login (username, password) An API route that allow users sign up
````

#### Books API
````bash
POST : http://localhost:5000/books/create API routes for users to create accounts and login to the application

GET : http://localhost:5000/books An API route that allow users to get all books in the library

GET : http://localhost:5000/books/{bookId} An API route that fetch a specific book

PATCH : http://localhost:5000/books/{id} An API route that to modify book in the library

DELETE : http://localhost:5000/books:id An API route that admin to delete books
````
#### Connect with mongodb
 mongodb+srv://mongo:<password>@cluster-vica.aqex4pn.mongodb.net/vica
  
  ** Backend is running http://localhost:5000
  
### Need to implement
````bash
POST : http://localhost:5000/books/borrow An API route that allow user to borrow a book

GET : http://localhost:5000/books/logs/{userId} An API route that allows users see rented book history
````
### Improvement area:
- Unit Test cases with mocking framework.
- Swagger documentation api.
- Functional (borrow and return module) -due to time constraints.
  
 ## ScreenShots of the project
 * Login Page
  ![image](https://user-images.githubusercontent.com/57896647/174084151-af7e22f6-f62b-415c-a212-1a9c382bf2f3.png)

 * Register Page
  ![image](https://user-images.githubusercontent.com/57896647/174083905-87150829-a3c7-4080-bb47-6e85c8e2abeb.png)

 * User Management page
   ![image](https://user-images.githubusercontent.com/57896647/174083486-6e7eaad6-23b7-41d3-bebf-218de9ab1218.png)
  
 * Book Management page
  ![image](https://user-images.githubusercontent.com/57896647/174083251-fcd8d085-8e5d-4882-9158-31acb49bdcd9.png)

### Few postman screenshots
<img width="1370" alt="Screenshot 2022-06-16 at 7 26 32 PM" src="https://user-images.githubusercontent.com/57896647/174086986-4bac7947-9bdc-4b76-8767-70a602939577.png">
  
  <img width="1368" alt="Screenshot 2022-06-16 at 7 26 19 PM" src="https://user-images.githubusercontent.com/57896647/174087069-c82909e8-cecd-4370-b6e4-23fbc4f2717d.png">

  <img width="1368" alt="Screenshot 2022-06-16 at 7 26 06 PM" src="https://user-images.githubusercontent.com/57896647/174087124-1aa730aa-be55-4acf-a0d8-d13eb8351c3f.png">
  
  <img width="1370" alt="Screenshot 2022-06-16 at 7 25 30 PM" src="https://user-images.githubusercontent.com/57896647/174087212-21f9701b-6206-4f85-aa7c-db61d6652b10.png">


  

  
 
