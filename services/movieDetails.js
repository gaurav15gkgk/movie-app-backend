//importing the libraries
import fs from 'fs'
import util from 'util'

//importing movie details repository
import {
    addMovie,
    fetchMovie,
    fetchMovies
} from '../repository/movieDetails.js'

//importing the util for uploading file to s3
import {
    uploadFile,
    getFile
} from '../utils/s3.js'

const unlinkSync = util.promisify(fs.unlink)

// service to fetch movie 
export const fetchMoviesService = async() =>{
    return new Promise(async (resolve, reject) => {
        try {
            const fetchedMovies = await fetchMovies();
            return resolve(fetchedMovies)
        } catch (error) {
            console.error(error)
            return reject(error)
        }
    })
}

//service to fetch movie by Id
export const fetchMovieByIdService = async(id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const fetchedMovie = await fetchMovie(id)
            return resolve(fetchedMovie)
        } catch (error) {
            console.error(error)
            return reject(error)
        }
    })
}

//service to add movie 
export const addMovieService = async(movieName, movieDescription, releaseDate, file, trailerLink, language, genres) => {
    return new Promise(async (resolve, reject) => {
        try {
            
            const moviePoster = await uploadFile(file)
            const newMovie = await addMovie(movieName, movieDescription, 
                releaseDate, moviePoster.Key, trailerLink, language, genres)
            
            await unlinkSync(file.path)
            return resolve(newMovie)

        } catch (error) {
            console.error(error)
            return reject(error)
        }
    })
}

export const fetchMoviePosterService = async(key) => {
    return new Promise(async (resolve, reject) => {
        try {
            const moviePosterFileStream = await getFile(key)
            return resolve(moviePosterFileStream)
        } catch (error) {
            console.error(error)
            return reject({
                code : 500,
                data : null,
                msg : "Internal server error"
            })
        }
    })
}