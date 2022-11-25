
import { user} from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../conf/db';
import {
    MangmantSchemaType,
    UpdataMangmantSchemaType,
    getOneMangmantSchemType

} from '../Schema/schemaMagemantS';


export const getmovies = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = await prisma.user.findMany();
      return res.status(200).json(user);
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
      const { id } = req.query as  getOneMangmantSchemType;
      const Newmovies = await prisma.user.findOne({
    where: { id },
    select: {
        id: true,
        name : true,
      
    }
    
          });
  
      return res.status(200).json(Newmovies);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Server Error !' });
    }
  };




  export const getmovie3 = async (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
        try {
          const { Email } = req.query as  getOneMangmantSchemType;
          const Newmovies = await prisma.user.findOne({
        where: { Email },
        select: {
            id: true,
            name : true,
          
        }
        
              });
      
          return res.status(200).json(Newmovies);
        } catch (error) {
          console.log(error);
          return res.status(500).json({ message: 'Server Error !' });
        }
      };



  