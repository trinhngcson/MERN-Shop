const express = require("express");
const dbConnect = require("./backend/config/dbConnect");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const {
  notFound,
  errorHandler,
} = require("./backend/middlewares/errorHandler");
const authRouter = require("./backend/routes/authRoute");
const productRouter = require("./backend/routes/productRoute");
const blogRouter = require("./backend/routes/blogRoute");
const prodCateRouter = require("./backend/routes/prodCateRoute");
const blogCateRouter = require("./backend/routes/blogCateRoute");
const brandRouter = require("./backend/routes/brandRoute");
const couponRouter = require("./backend/routes/couponRoute");

const PORT = process.env.PORT || 4000;
dbConnect();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", prodCateRouter);
app.use("/api/blogcategory", blogCateRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running with PORT ${PORT}`);
});
