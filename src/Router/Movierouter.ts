import express from 'express';
import {prisma} from '../conf/db';
import { Movie} from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import {
    getmovies ,
    getmovie2,
    addMovie,
    updateMovie,
    deleteMovie
} from '../controller/movieCon';
import validate from '../Middlware/Valdation';
import {
    MovieSchema,
    UpdataMovieSchema,
    deleteMovieSchem,
    getOneSchem
    
} from '../Schema/schemamovie';

const router = express.Router();

router.get('/', getmovies);
router.get('/one', validate(getOneSchem), getmovie2);
router.post('/', validate(MovieSchema), addMovie);
router.put('/:id', validate(UpdataMovieSchema), updateMovie);
router.delete('/:id', validate(deleteMovieSchem), deleteMovie);






























