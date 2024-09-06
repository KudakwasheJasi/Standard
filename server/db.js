import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://kudakwashejasi4:2002kudakwashe@cluster0.4vho0.mongodb.net/Manage?retryWrites=true&w=majority');
        console.log("DB Connected");
    } catch (err) {
        console.error("Error connecting to MongoDB", err);
    }
}