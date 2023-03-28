//importing movie details services
import {
    fetchMovieByIdService,
    fetchMoviesService,
    addMovieService
} from '../services/movieDetails.js'

//fetch movies controller
export const fetchMoviesController = async(req, res) => {
    try {
        const movies = await fetchMoviesService()
        const {code, data, msg} = movies
        return res.status(code).json({
            data,
            msg
        })

    } catch (error) {
        console.error(error)
        return res.status(error.code ? error.code : 500).json({
            data : null,
            msg : error.msg ? error.msg : `Internal Server Error`
        })
    }
}

//fetch movie by Id controller
export const fetchMovieByIdController = async(req, res) => {
    try {
        const movie = await fetchMovieByIdService(req.query.movieId)
        const {code, data, msg} = movie
        return res.status(code).json({
            data,
            msg
        })
    } catch (error) {
        console.error(error)
        return res.status(error.code ? error.code : 500).json({
            data : null,
            msg : error.msg ? error.msg : `Internal Server Error`
        })
    }
}

//add movie Controller
export const addMovieController = async(req, res) => {
    try {
        const { movieName, movieDescription, releaseDate, trailerLink, language, genres} = req.body
        const file = req.file
        const newMovie = await addMovieService(movieName, movieDescription, releaseDate, file, trailerLink, language, genres)

        const { code, data, msg } = newMovie
        return res.status(code).json({
            data,
            msg
        })
    } catch (error) {
        console.error(error)
        return res.status(error.code ? error.code : 500).json({
            data : null,
            msg : error.msg ? error.msg : `Internal Server Error`
        })
    }
}

