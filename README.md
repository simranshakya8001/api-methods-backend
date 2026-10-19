# Notes API

A simple REST API for managing notes, built with **Node.js** and **Express**. It supports full CRUD operations and was tested using **Postman**.

## Features

- Create a new note
- Retrieve all notes
- Update a note's description
- Delete a note

## Tech Stack

- Node.js
- Express.js
- Postman (for API testing)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

### Installation

```bash
# Clone the repository
git clone https://github.com/simranshakya8001/api-methods-backend.git

# Go to the project folder
cd api-methods-backend

# Install dependencies
npm install

# Start the server
node server.js
```

The server will run on `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/notes` | Create a new note |
| GET | `/notes` | Get all notes |
| PATCH | `/notes/:index` | Update a note's description |
| DELETE | `/notes/:index` | Delete a note |

## Example Requests

### Create a note

**POST** `/notes`

```json
{
    "title": "Shopping",
    "description": "Buy milk"
}
```

**Response** (`201 Created`)

```json
{
    "message": "note created successfully"
}
```

### Get all notes

**GET** `/notes`

**Response** (`200 OK`)

```json
{
    "message": "notes fetched successfully",
    "notes": [
        {
            "title": "Shopping",
            "description": "Buy milk"
        }
    ]
}
```

### Update a note

**PATCH**
