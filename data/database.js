import mongoose from "mongoose";
export const connectDB = async () => {
  mongoose.connect(process.env.DBURI, {
    dbName: "backend_api",
    useNewUrlParser: true
  })
  .then((c) => console.log(`Database Connected with ${c.connection.host}`))
  .catch((e) => console.log("Huehue", e));
}

