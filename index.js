const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

//Config body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
const usersRouter = require("./routers/usersRouter");
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log("listening on port" + PORT);
});
