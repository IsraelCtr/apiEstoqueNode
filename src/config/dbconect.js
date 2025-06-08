
import mongoose from "mongoose";

// Ensure process.env is available (Node.js environment)
async function conectiondatabase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
}
export default conectiondatabase;