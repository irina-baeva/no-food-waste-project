const express = require("express");
const connectDB = require("./config/db");
const { check, validationResult } = require("express-validator");
const cors = require("cors");
const PORT = process.env.PORT || 5050;

const path = require("path");

const app = express();
app.use(cors());
//Connect DB
connectDB();

//init middleware, before it was with BodyParser, now we can do with express
app.use(
  express.json({
    extended: false,
  })
);
// app.get('/', (req, res) => res.send('API is runnig'))

//define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening ${PORT}`);
});
