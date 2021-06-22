//connection setup for MongoDB
mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .catch((error) =>
    console.error("Error connecting to MongoDB: ", error.message)
  );
//listening to MongoDB events
mongoose.connection.on("disconnected", () =>
  console.log(`Disconnected from MongoDB!`)
);
//listening to errors
mongoose.connection.on("error", (error) =>
  console.error(`MongoDB connection error: ${error}`)
);
// Export the connection
export default mongoose.connection;
