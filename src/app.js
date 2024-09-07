const express = require("express");
const app = express();
const cors = require("cors");
const { PORT } = require("./config/server.config");
const bodyParser = require("body-parser");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");

app.use(cors());

// Parsing Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Routes
app.use("/api", apiRouter);
app.get("/check", (req, res) => {
  return res.send("Hello World");
});

// Registering Global Error Handler
app.use(errorHandler);

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectToDB();
  // await runTest();
});
