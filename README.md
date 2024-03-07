# Contact Manager App

A basic contact manager application with CRUD operations connected to MongoDB, featuring a custom errorHandler middleware to handle status codes and display custom errors. This project allows you to manage your contacts by performing Create, Read, Update, and Delete (CRUD) operations.

## Getting Started

Follow these steps to set up and run the Contact Manager App on your local machine:

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/) (Make sure MongoDB is installed and running)

### Installation

1. Clone the repository:

   ```bash 
   git clone https://github.com/your-username/contact-manager-app.git
   
2. Change into the project directory:
 
   ```bash 
   cd contact-manager-app
   
3. Install dependencies
 
   ```bash 
   npm install

### Usage

  To start the development server, run:
  ```bash
  npm run dev
  ```
The server will run at http://localhost:5000 by default.

### CRUD Operations

Use a tool like Postman or ThunderClient to interact with the API.

### Custom Error Handling

The project includes a custom errorHandler middleware that checks the status code and displays custom error messages. If an error occurs, the middleware will log the error and return an appropriate error message.

### Contributing

If you would like to contribute to this project or have suggestions, feel free to open an issue or create a pull request.
