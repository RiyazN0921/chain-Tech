To-Do List Backend
Welcome to the To-Do List application backend! This section provides instructions on how to use the backend and offers insights into the code structure and key decisions made.

Instructions
Installation
Clone the repository:

git clone https://github.com/RiyazN0921/chain-Tech
Install dependencies:

- Express
- body-parser
- cors
- bcrypt
- dotenv
- jsonwebtoken
- mongoose

Configure environment variables:
Create a .env file and provide the necessary configuration, such as MongoDB connection string and JWT secret key.

Start the backend server:

node index.js
Verify the server is running:
Visit http://localhost:9000 to ensure the backend server is up and running.

Code Structure
The backend code is organized into the following main components:

Server:

Built with Node.js and Express.
Responsible for handling HTTP requests and responses.
Database (MongoDB):

Mongoose is used as an ODM (Object Data Modeling) library for MongoDB.
Tasks are stored in a tasks collection.
Authentication:

JWT (JSON Web Token) is implemented for user authentication.
Middleware functions handle token verification and user authentication.
Controllers:

Task-related logic is organized into controllers.
CRUD operations for tasks are defined here.
Key Decisions
Express for Backend:

Express.js is chosen as the backend framework for its simplicity and ease of use.
Allows for quick development and efficient routing.
Mongoose for MongoDB:

Mongoose is used to model data and interact with MongoDB.
Schemas are defined for tasks to ensure data consistency.
JWT for Authentication:

JSON Web Token (JWT) is implemented for secure user authentication.
Middleware functions verify tokens and authenticate users.
Modular Code:

Code is organized into modular components (controllers, middleware, model, routes) for maintainability.
Separation of concerns allows for easy testing and future enhancements.
Error Handling:

Robust error handling is implemented to provide meaningful responses.
Appropriate HTTP status codes are used for different scenarios.
Meaningful error messages are added for the easy understanding

folders:

model : which holds the schema of user,tasks.
controller : which uses schema of user and tasks and implements functions based on requirments or else in general which conatins api's code.
routes: which contains the route of each and every functions of controller by this route we can know which one is used for what purpose.
config : which is used for Database connection and holds the code of database. configuration is done.
utils: helper functions like validation.
index : it is the main file of the backend where all the routes,handlers,database connections are handled.
.env: it is the environment file where we store environment variables such as database url,jwt secret and some more

usage of api's are as follows:

USER:

- signup: http://localhost:9000/api/user/signup
  payload : {"email": "user@example.com", "password": "example@example.com"}
  POST REQUEST

- login: http://localhost:9000/api/user/login
  payload : {"email": "user@example.com", "password": "example@example.com"}
  POST REQUEST

- By this login route we will get bearer token which is used for authentication of users.

TASKS:

- create Task : http://localhost:9000/api/task
  payload : {
  "title": "Task 10",
  "description": "Description for Task 10",
  "completed": false,
  "dueDate": "2022-09-18T16:45:00Z",
  "category": "Work"
  }
  In Authorization we should pass bearer token which we get after login.
  POST REQUEST

- Get All Tasks : http://localhost:9000/api/task
  GET REQUEST
  By this route we can get all the tasks.
  In Authorization we should pass bearer token which we get after login.

- Mark Task as completed : http://localhost:9000/api/task/:id/complete
  PUT REQUEST
  In params we should pass task \_id
  In Authorization we should pass bearer token which we get after login.
  payload : {
  "completed":"true"
  }

- Edit Task : http://localhost:9000/api/task/:id
  PUT REQUEST

payload : {
"completed":"false",
"title":"project"
}
In Authorization we should pass bearer token which we get after login.
in params we should pass task \_id and we can edit any field such as title,description,dueDate,completed,category.

- Delete Task : http://localhost:9000/api/task/:id
  In params we should pass task \_id
  In Authorization we should pass bearer token which we get after login.

- get Tasks by title name:http://localhost:9000/api/task/title/:title
  In params we should pass title name of task
  In Authorization we should pass bearer token which we get after login.

- get Tasks by category :http://localhost:9000/api/taskcategory/:category
  In params we should pass category name of task
  In Authorization we should pass bearer token which we get after login.
