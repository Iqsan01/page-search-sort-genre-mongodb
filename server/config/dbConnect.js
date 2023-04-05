import mongoose from "mongoose";

const dbConnect = () => {
    const connectionParams = { useNewUrlParser: true };
    mongoose.connect(process.env.MONGO_URL, connectionParams);

    mongoose.connection.on("connected", () => {
        console.log("Connected to database sucessfully");
    });

    mongoose.connection.on("Error", (err) => {
        console.log("Error while connection to database :" + err);
    });

    mongoose.connection.on("disconnected", () => {
        console.log("Mongodb connection disconnected");
    });
};

export { dbConnect }