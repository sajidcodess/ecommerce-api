const express = require("express");
const connectDB = require("./config/db.js");
const authRouter = require("./routes/auth.router.js");
const blogRouter = require("./routes/blog.router.js");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

// connect to MongoDB
connectDB();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/blogs", blogRouter);

app.get("/", (req, res) => {
    res.send(
        "Read README.md for help: https://github.com/sajidcodesdotcom/blog-api"
    );
});

module.exports = app;
