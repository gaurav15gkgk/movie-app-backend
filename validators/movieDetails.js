//import helper functions to validate the parameter
import {
    parameterValidators,
    makeInvalidParametersString
} from '../utils/parameterValidators.js'

//importing the common regex 
import {
    mongoObjectIdRegex
} from '../utils/commonRegex.js'

//validator for fetch movie by movieID
export const fetchMovieByIdValidator = (req, res, next) => {
    const validParameters = [
        {
            parameter: 'movieId',
            type: '',
            expressionType: 'regex',
            validExpression: mongoObjectIdRegex
        }
    ]

    const inValidParameters = parameterValidators(validParameters, req.query)
       
    if(inValidParameters.length > 0){
        const inValidParametersString = makeInvalidParametersString(inValidParameters)
        return res.status(400).json({
            "error": `${inValidParametersString}`
        })
    }

    next()
}

//validator for add movie
export const addMovieValidator = (req, res, next) => {
    let validParameters = [
        {
            parameter: 'movieName',
            type: 'string',
            expressionType: 'typeof',
            validExpression: ''
        },
        {
            parameter: 'movieDescription',
            type: 'string',
            expressionType: 'typeof',
            validExpression: ''
        },
        {
            parameter: 'releaseDate',
            type: 'string',
            expressionType: 'typeof',
            validExpression: ''
        },
        {
            parameter: 'trailerLink',
            type: 'string',
            expressionType: 'typeof',
            validExpression: ''
        },
        {
            parameter: 'language',
            type: 'string',
            expressionType: 'typeof',
            validExpression: ''
        },
        {
            parameter: 'movieGenres',
            type: 'object',
            expressionType: 'typeof',
            validExpression: ''
        }

    ]

    let inValidParameters = parameterValidators(validParameters, req.body)
       
    if(inValidParameters.length > 0){
        const inValidParametersString = makeInvalidParametersString(inValidParameters)
        return res.status(400).json({
            "error": `${inValidParametersString}`
        })
    }

     validParameters = [
        {
            parameter: 'file',
            type: 'object',
            expressionType: 'typeof',
            validExpression: ''
        }
    ]

    inValidParameters = parameterValidators(validParameters, req)
       
    if(inValidParameters.length > 0){
        const inValidParametersString = makeInvalidParametersString(inValidParameters)
        return res.status(400).json({
            "error": `${inValidParametersString}`
        })
    }



    next()

}

//validator for fetch movie poster
export const fetchMoviePosterValidator = (req, res, next) => {
    const validParameters = [
        {
            parameter: 'posterKey',
            type: 'string',
            expressionType: 'typeof',
            validExpression: ''
        }
    ]

    const inValidParameters = parameterValidators(validParameters, req.query)
       
    if(inValidParameters.length > 0){
        const inValidParametersString = makeInvalidParametersString(inValidParameters)
        return res.status(400).json({
            "error": `${inValidParametersString}`
        })
    }

    next()
}