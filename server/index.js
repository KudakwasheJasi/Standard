import express from 'express';
import { connectDB } from './db.js';  // Use curly braces for named exports

const app = express();

// Connect to the database
const startServer = async () => {
    try {
        await connectDB();  // Call the connectDB function
        console.log("Connected to the database successfully.");
        
        // Start the server only after a successful database connection
        app.listen(3000, () => {
            console.log("App is running on http://localhost:3000");
        });
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
};

// Call the function to start the server
startServer();