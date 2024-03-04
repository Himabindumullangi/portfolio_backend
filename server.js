const express = require("express");
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const helmet = require("helmet");
const  jwt = require('jsonwebtoken');

const usersRoutes = require("./src/routes/usersRoutes") 

const app = express();

app.use(helmet());

app.use("/api", usersRoutes)

const port = process.env.PORT;

app.listen(port , () => console.log(`server running on  port ${port}`))

