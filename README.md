# ChatApp Project using MERN and Websockets

Welcome to the ChatApp project! This application is built using the MERN (MongoDB, Express.js, React, Node.js) stack and incorporates Websockets for real-time messaging functionality. With ChatApp, users can create accounts, join chat rooms, and engage in instant messaging with other users. The integration of Websockets ensures that messages are delivered and displayed in real-time, enhancing the user experience.

## Features

- User authentication and registration.
- Create, join, and leave chat rooms.
- Real-time messaging within chat rooms using Websockets.
- User online/offline status updates.
- User profile management.

## Getting Started

Follow these instructions to get the ChatApp project up and running on your local machine.

### Prerequisites

Make sure you have the following software installed:

- Node.js and npm (Node Package Manager)
- MongoDB

### Installation

1. Clone this repository to your local machine using `git clone https://github.com/suriyaprakash666/chat-app`.
2. Navigate to the project directory: `cd chat-app`.

For both the client and server directories, follow these steps:

3. Install the required dependencies by running `npm install`.

### Running the App

1. **Server:**

   Navigate to the `server` directory:

   ```bash
   cd server
   ```

   Create a .env file in the server directory and add your MongoDB connection string:

   ```env
   MONGODB_URI=your-mongodb-connection-string
   ```

   Start the server:

   ```bash
   npm start
   ```

2. **Client:**

   In a new terminal window, navigate to the client directory:

   ```bash
   cd client
   ```

   Start the client:

   ```bash
   npm start
   ```

   This will launch the ChatApp in your default web browser.

## Tech Stack

- Frontend: React, React Router, Tailwindcss.
- Backend: Node.js, Express.js, Websockets (Socket.io)
- Database: MongoDB (Atlas)
- State Management: ContextAPI
- Authentication: JWT (JSON Web Tokens)
