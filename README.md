# Chat App Project

Welcome to the Chat App project! This project is built using the MERN stack, DaisyUI, Socket.IO, React-Hot-Toast, and other modern technologies to deliver a seamless real-time chat experience.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This Chat App is a real-time chat application designed to provide an interactive platform for users to communicate. It leverages the power of the MERN stack (MongoDB, Express, React, Node.js) and incorporates additional tools and libraries like DaisyUI for styling, Socket.IO for real-time communication, and React-Hot-Toast for notifications.

## Features

- Real-time messaging with Socket.IO
- User authentication and authorization
- Beautiful UI with DaisyUI
- Notifications using React-Hot-Toast
- Responsive design for mobile and desktop
- User-friendly interface

## Technologies Used

- **MongoDB**: NoSQL database for storing user data and messages.
- **Express**: Node.js framework for building the server-side application.
- **React**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for the backend.
- **DaisyUI**: Utility-first CSS framework for styling.
- **Socket.IO**: Library for real-time web applications.
- **React-Hot-Toast**: Library for showing notifications.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app
   ```

2. **Install server dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `server` directory with the following content:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

5. **Run the server:**
   ```bash
   cd ../server
   npm start
   ```

6. **Run the client:**
   ```bash
   cd ../client
   npm start
   ```

## Usage

Once the installation is complete and both server and client are running, open your browser and navigate to `http://localhost:3000` to use the Chat App.

## Project Structure

```
chat-app/
│
├── server/                  # Express server
│   ├── config/              # Configuration files
│   ├── controllers/         # Controller functions
│   ├── models/              # Mongoose models
│   ├── routes/              # Express routes
│   ├── middleware/          # Middleware functions
│   ├── server.js            # Entry point for the server
│   └── .env                 # Environment variables
│
└── client/                  # React client
    ├── public/              # Public assets
    ├── src/                 # Source files
        ├── components/      # React components
        ├── pages/           # React pages
        ├── context/         # Context API for state management
        ├── utils/           # Utility functions
        ├── App.js           # Main App component
        ├── index.js         # Entry point for React
        └── styles/          # Styling files
```

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch.
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them.
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch.
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Thank you for using our Chat App! If you have any questions, feel free to open an issue or contact the project maintainers. Happy chatting!
