//importing movie details model
import MovieDetails from "../models/movieDetails.js";

// repository to fetch movies
export const fetchMovies = async() => {
    return new Promise(async(resolve, reject) => {
        try {
            const movies = await MovieDetails.find()
                                    .select('_id movieName movieDescription releaseDate moviePosterLink')
            return resolve({
                code : 200,
                data : movies,
                msg : `Movies fetched successfully`
            })
        } catch (error) {
            console.error(error)
            return reject({
                code : 500,
                data : null,
                msg : `Error in fetching movies`
            })
        }
    })
}

// repository to fetch movie by Id
export const fetchMovie = async(id) => {
    return new Promise(async(resolve, reject) => {
        try {
            const movie = await MovieDetails.findById(id)
            return resolve({
                code : 200,
                data : movie,
                msg : `Movie fetched successfully`
            })
        } catch (error) {
             console.error(error)
            return reject({
                code : 500,
                data : null,
                msg : `Error in fetching movie`
            })
        }
    })
}

// repository to add a movie
export const addMovie = async(movieName, movieDescription, releaseDate, moviePosterLink, trailerLink, language, genres) => {
    return new Promise(async(resolve, reject) => {
        try {
            const newMovie = new MovieDetails({
                movieName: movieName,
                movieDescription : movieDescription,
                releaseDate : releaseDate,
                moviePosterLink : moviePosterLink,
                trailerLink : trailerLink,
                language : language,
                movieGenres : genres
            })

            await newMovie.save()
            
            return resolve({
                code: 201, 
                data : null,
                msg : `Movie added successfully`
            })

        } catch (error) {
            console.error(error)
            return reject({
                code : 500,
                data : null,
                msg : `Error in adding movie`
            })
        }
    })
}