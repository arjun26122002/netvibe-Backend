import express from "express";
import bodyparser from "body-parser";
import mongoose from 'mongoose'
import dotenv from "dotenv";
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'

//Routes

const app = express();

//MiddleWare
app.use(bodyparser.json({ limit: '30mb', extended: true }))
app.use(bodyparser.urlencoded({ limit: '30mb', extended: true }))


dotenv.config();
mongoose
    .connect(process.env.MONGO_DB,
        { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => app.listen(process.env.PORT, () => console.log(`Listening at ${process.env.PORT}`)))
    .catch((error) => console.log(error));




app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
