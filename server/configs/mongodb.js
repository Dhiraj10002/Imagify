import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("Database Connected");
    })

    mongoose.connection.on('error', (err) => {
        console.error("Database Connection Error:", err.message);
    })

    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI environment variable is not set');
    }

    await mongoose.connect(`${process.env.MONGODB_URI}/ai-image`)

}

export default connectDB;