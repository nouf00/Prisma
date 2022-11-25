
import {Movie} from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../conf/db';
import {
  MovieSchema,
  deleteMovieSchem,
  UpdataMovieSchema,
  getOneSchem,
  TypegetOneSchem,
  UpdataMovieSchemaType,
  MovieSchemaType

} from '../Schema/schemamovie';


export const getmovies = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const movie = await prisma.movie.findMany();
      return res.status(200).json(movie);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Server Error !' });
    }
  };



 // ______________________________________________________________________________________________________
  export const getmovie2 = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.query as TypegetOneSchem;
      const datausrt = req.body as MovieSchemaType
      const Newmovies = await prisma.movie.findUnique({
    where: { id }
    
          });
  
      return res.status(200).json(Newmovies);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Server Error !' });
    }
  };

  //_______________________________________________________________________________________
  
  export const addMovie = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const newMovie= req.body as Movie ;
  
      await prisma.movie.create({
        data: newMovie,
      });
      return res.status(201).json({ message: 'New contact added !' });
    } catch (error) {
      return res.status(500).json({
        message: 'Server Error !',
      });
    }
  };


  
  export const updateMovie = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const newMovie= req.body as Movie;
      const { id } = req.params as   UpdataMovieSchemaType;
  
      await prisma.movie.update({
        where: { id },
        data: newMovie,
      });
      return res.status(200).json({ message: 'Movie updated' });
    } catch (error) {
      return res.status(500).json({
        message: 'Server Error !',
      });
    }
  };
  
  export const deleteMovie = async (req: Request, res: Response) => {
    try {
      const { id } = req.params as UpdataMovieSchemaType;
  
      await prisma.movie.delete({
        where: { id },
      });
      return res.status(200).json({ message: 'Movie Deleted !' });
    } catch (error) {
      return res.status(500).json({
        message: 'Server Error !',
      });
    }
  };
  

