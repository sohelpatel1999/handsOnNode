# Node.js CRUD API with Express and MongoDB

This project is a simple CRUD (Create, Read, Update, Delete) API built using Node.js, Express, and MongoDB. The API allows you to manage a collection of `Person` entities.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Database Setup](#database-setup)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (either local installation or a MongoDB Atlas account)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Create a `.gitignore` file and add `node_modules/` to it:
   ```sh
   echo "node_modules/" > .gitignore
   ```

## Project Structure

├── config
│ └── database.js
├── controllers
│ └── personController.js
├── models
│ └── person.js
├── routes
│ └── personRoutes.js
├── index.js
├── .gitignore
├── package.json
└── README.md

- **config/database.js**: Contains the MongoDB connection setup.
- **controllers/personController.js**: Contains the CRUD logic for the `Person` model.
- **models/person.js**: Defines the `Person` schema.
- **routes/personRoutes.js**: Defines the API routes for the `Person` entity.
- **server.js**: Entry point for the Express server.

## Database Setup

1. Create a MongoDB database locally or use MongoDB Atlas.
2. Update the MongoDB connection string in `config/database.js`:

```javascript
const mongoose = require("mongoose");

const mongourl = "mongodb://localhost:27017/shop";

mongoose.connect(mongourl);


## API Endpoints

- `POST /person`: Create a new person.
- `GET /persons`: Get all persons.
- `GET /person/:id`: Get a person by ID.
- `PUT /person/:id`: Update a person by ID.
- `DELETE /person/:id`: Delete a person by ID.

## Usage

- Use a tool like Postman to send requests to the API endpoints.
- Make sure MongoDB is running before starting the server.

## Contributing

Contributions are welcome! Fork the repository and submit a pull request.



```
