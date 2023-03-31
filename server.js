//importing libraries
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import morgan from 'morgan';
import cors from 'cors'

//importing movie routes
import movieRoutes from './routes/movieDetails.js'

const app = express()
dotenv.config();

app.use(morgan('tiny'))
app.use(cors())


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//adding movie route middleware
app.use('/movie', movieRoutes)


//using keys from env
const port = process.env.PORT
const mongodb_uri = process.env.MONGODB_URI

//mongodb connection
mongoose.connect(mongodb_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("DB connected successfully")
})

mongoose.connection.on('error', err => {
    console.error("err ", err)
    console.error(`DB connection error: ${err.message}`);
});

//express server listen
app.listen(port, (err) => {
    if(err){
        console.log("Error in starting the server")
    }
    else console.log(`Server started at http://localhost:${port}`)
})