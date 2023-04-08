const express = require("express");
const dbConnect = require("./backend/config/dbConnect");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const {
  notFound,
  errorHandler,
} = require("./backend/middlewares/errorHandler");
const authRouter = require("./backend/routes/authRoute");

const PORT = process.env.PORT || 4000;
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running with PORT ${PORT}`);
});
