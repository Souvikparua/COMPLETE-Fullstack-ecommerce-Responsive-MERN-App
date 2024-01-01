# Fullstack Ecommerce Responsive MERN App

This repository contains the complete source code for building a Fullstack Ecommerce Responsive MERN (MongoDB, Express, React, Node.js) App. The application is a working ecommerce site developed from scratch, utilizing React for the frontend, Redux for state management, Node.js for the backend, and MongoDB as the database.

## Features

- **Responsive Design:** The application is designed to be responsive, ensuring a seamless user experience across various devices and screen sizes. Tailwind CSS is used for responsive design and styling.

- **User Authentication:** Implement user authentication to allow users to sign up, log in, and manage their accounts securely.

- **Product Management:** Enable administrators to add, edit, and delete products, managing the inventory of the ecommerce platform.

- **Shopping Cart:** Implement a shopping cart functionality that allows users to add products to their cart, update quantities, and proceed to checkout.

- **Order Processing:** Manage the order processing flow, including order creation, payment integration, and order confirmation.

- **User Profile:** Users can view and edit their profiles, track order history, and manage personal information.

## Tech Stack

- **Frontend:**
  - React: JavaScript library for building user interfaces.
  - Redux: State management library for predictable state container.
  - React Router: Declarative routing for React.js.

- **Backend:**
  - Node.js: JavaScript runtime for server-side development.
  - Express: Web application framework for Node.js.
  - MongoDB: NoSQL database for data storage.
  - Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.

- **Middleware:**
  - Cors: Middleware for enabling Cross-Origin Resource Sharing, facilitating communication between the frontend and backend.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Souvikparua/COMPLETE-Fullstack-ecommerce-Responsive-MERN-App.git
   cd COMPLETE-Fullstack-ecommerce-Responsive-MERN-App
   ```

2. **Install Dependencies:**
   ```bash
   # Install frontend dependencies
   npm install

   # Install backend dependencies
   cd backend
   npm install
   ```

3. **Configure Environment Variables:**
   - Create a `.env` file in the `backend` directory.
   - Add the required environment variables, such as MongoDB connection string, etc.

4. **Run the Application:**
   ```bash
   # Run the frontend (in the root directory)
   npm start

   # Run the backend (in the backend directory)
   npm run dev
   ```

5. **Open in Browser:**
   Open your browser and navigate to `http://localhost:8000` to access the ecommerce application.


## License

This project is licensed under the [GPL License](LICENSE). Feel free to use and modify the code for your own projects.
