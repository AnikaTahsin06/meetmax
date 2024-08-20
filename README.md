# MeetMax
MeetMax is a React-based application designed for a frontend development task. This project showcases the implementation of an Authentication and Feed screen UI. The backend services are simulated using mock data to ensure the application behaves as expected.This README file provides instructions on how to set up, run, and test the application.

1. Table of Contents
2. Prerequisites
3. Setup Instructions
4. Running the Application
4. Testing
5. Assumptions
6. Tools Used
7. Backend/API Simulation

# Prerequisites
Before setting up the project, ensure you have the following installed:

1. Node.js (version 18.x or above)
2. npm or Yarn (preferably npm version 8.x or above)

# Setup Instructions

1. Clone the repository: git clone https://github.com/AnikaTahsin06/meetmax
2. Navigate to the project directory: cd meetmax
3. Install dependencies: npm install or yarn install

# Running the Application
1. Start the development server: npm run dev or yarn dev
2. Build the project for production: npm run build or yarn build

# Testing
Lint the project: npm run lint or yarn lint

# Assumptions
1. The application assumes that the backend API is running on the default port and can be accessed as specified in the project's configuration.
2. The application is designed to work with modern web browsers.

# Tools Used
1. React: Frontend library for building user interfaces.
2. Vite: Build tool for fast development and production builds.
3. JSON Server: Mock backend to simulate API calls.
4. ESLint: Linting tool for identifying and fixing problems in JavaScript/TypeScript code.

# Backend/API Simulation
This project uses json-server to simulate a backend. The json-server setup is included in the project dependencies and can be run locally:

1. Start the JSON server: npx json-server --watch db.json
This will start a mock server on http://localhost:8000 by default.