
import {z ,TypeOf} from "zod"


export const MangmantSchema=z.object({
body:z.object({
  
    name:z.string(),
    pasword:z.number(),
    Email:z.string().email(),
    role:z.enum(["Admin ", "user"]),
    jionongYear:z.string(),
    age:z.number().gte(18),
})
})


export const UpdataMangmantSchema=z.object({
    body:z.object({
      
        name:z.string(),
        pasword:z.number(),
        Email:z.string(),
        role:z.enum(["Admin ", "user"]),
        jionongYear:z.string(),
        age:z.number().gte(18),

    }),
    params:z.object({
        id: z.string({ required_error: 'Please send id in the params' }),
      }),
    })


  
      export const getOneMangmantSchem = z.object({
        query: z.object({
          id: z.string({ required_error: 'Please send id in the params' }),
        }),
      });



export type MangmantSchemaType = TypeOf<typeof MangmantSchema>['body'];


export type UpdataMangmantSchemaType = z.infer<typeof UpdataMangmantSchema>['params'];

export type getOneMangmantSchemType= z.infer<
  typeof getOneMangmantSchem>['query'];