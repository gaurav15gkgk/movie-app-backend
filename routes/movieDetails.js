//importing the libraries
import multer from 'multer'
import express from 'express'

//importing movie details controllers
import {
    fetchMoviesController,
    fetchMovieByIdController,
    addMovieController,
    fetchMoviePosterController
} from '../controllers/movieDetails.js'

//importing the movie details validators
import {
    fetchMovieByIdValidator,
    addMovieValidator,
    fetchMoviePosterValidator
} from '../validators/movieDetails.js'

const upload = multer({ dest: 'uploads/' })

const router = express.Router()

//route to add the movie
router.post('/add', upload.single('moviePoster'), addMovieValidator, addMovieController)

//route to fetch the movie by movieId
router.get('/by/movieId',fetchMovieByIdValidator,  fetchMovieByIdController)

//route to fetch the movies
router.get('/all',  fetchMoviesController)

//route to fetch the movie poster
router.get('/poster', fetchMoviePosterValidator, fetchMoviePosterController)


export default router





