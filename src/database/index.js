import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl = "mongodb+srv://tiyaskristanti12:1234567892023@cluster0.voi1qy2.mongodb.net/";

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Ecommerce database connected successfully!"))
    .catch((err) => console.log(`Getting Error from DB connection ${err.message}`));
};

export default connectToDB;
