# Trade Flow

**Trade Flow** is a fullstack application that replicates the core functionalities of Zerodha, including a trading dashboard, market analysis tools, and order management system.

# Project Links

- **Landing Page**: [Visit Landing Page](https://trade-flow-landing-page.onrender.com)
- **Kite Frontend**: [Visit Kite Frontend](https://trade-flow-kite.onrender.com)

## Project Structure

The project is divided into three main folders:

- **Backend**: Handles the API, user authentication, and data storage.
- **Frontend**: The main website interface of the Zerodha clone.
- **Dashboard**: The "Kite" clone with trading charts, live data, and account management.

## Tech Stack

- **Frontend**: React, React Router DOM, Material UI, Axios
- **Backend**: Node.js, Express, MongoDB, Passport.js for authentication
- **Dashboard**: React, Chart.js, Material UI, Axios

## Prerequisites

- Node.js 
- MongoDB

## Installation and Setup

Clone the repository and navigate into each folder (backend, frontend, and dashboard) to install the dependencies.

```bash
git clone https://github.com/alfiyainamdar31/trade-flow
cd trade-flow
```

## Backend Setup
```bash
cd backend
npm install
npm start
```
## Environment Variables

This project uses a `.env` file to manage environment variables. Make sure to create a `.env` file in the root directory of your project with the following variables:

```plaintext
MONGO_URI=your_mongo_connection_string
```

## Frontend 
```bash
cd ../frontend
npm install
npm start
```

## Dashboard Setup
```bash
cd ../dashboard
npm install
npm start
```
## Project Details
**Backend:**
1. Node.js server with Express.js.
2. MongoDB for database management.
3. Passport.js for local authentication.
4. RESTful API to manage user data, orders, etc.

**Frontend:**
1. Developed using React.
2. Includes routes for pages like home, login, signup, portfolio, etc.
3. Utilizes React Router for navigation.

**Dashboard (Kite Clone):**
1. Interactive trading dashboard with live market charts.
2. Real-time updates using Chart.js and Axios.
3. MUI components for responsive design.

## Available Scripts
For each directory (backend, frontend, and dashboard), you can run the following commands:
1. `npm start`: Runs the app in the development mode.
2. `npm build`: Builds the app for production.
3. `npm test`: Launches the test runner.
