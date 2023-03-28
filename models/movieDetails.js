//importing the libraries
import mongoose from "mongoose";

//contact schema
const movieDetailsSchema = new mongoose.Schema({
    movieName :{
        type: String,
        required : true
    },
    movieDescription : {
        type : String, 
        required : true,
    },
    releaseDate: {
        type : Date, 
        required : true,
    },
    moviePosterLink: {
        type: String, 
        required: true
    },
    trailerLink: {
        type: String, 
        required: true
    },
    language: {
        type: String, 
        required: true
    },
    movieGenres : [{
        type : String,
    }]
},  {timestamps: true})

const movieDetails = mongoose.model('movieDetails', movieDetailsSchema)

export default movieDetails