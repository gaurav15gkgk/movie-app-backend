//importing the libraries
import multer from 'multer'
import express from 'express'

//importing movie details controllers
import {
    fetchMoviesController,
    fetchMovieByIdController,
    addMovieController
} from '../controllers/movieDetails.js'

//importing the movie details validators
import {
    fetchMovieByIdValidator,
    addMovieValidator
} from '../validators/movieDetails.js'

const upload = multer({ dest: 'uploads/' })

const router = express.Router()

//route to add the movie
router.post('/add', upload.single('moviePoster'), addMovieValidator, addMovieController)

//route to fetch the movie by movieId
router.get('/by/movieId',fetchMovieByIdValidator,  fetchMovieByIdController)

//route to fetch the movies
router.get('/all',  fetchMoviesController)

export default router





