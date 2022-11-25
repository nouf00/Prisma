
import {z ,TypeOf} from "zod"


export const MovieSchema=z.object({
body:z.object({
  
    name:z.string().min(3),
    genre:z.enum(["Drama", "Action", "Comedy"] ,{ required_error:" Enter from these Drama|Action|Comedy)"}),
    rating:z.number().gte(1 , "pleas enter number great then 1").lte(5 , " pleas enter number less then 5 " ),
    duration:z.number().gte(60).lte(500),
    createdat:z.date({
        required_error: "Please select a date and time",
        invalid_type_error: "That's not a date!" }),
})

})
export const UpdataMovieSchema=z.object({
    body:z.object({
      
        name:z.string().min(3),
        genre:z.enum(["Drama", "Action", "Comedy"] ,{ required_error:" Enter from these Drama|Action|Comedy)"}),
        rating:z.number().gte(1 , "pleas enter number great then 1").lte(5 , " pleas enter number less then 5 " ),
        duration:z.number().gte(60).lte(500),
        createdat:z.date({
            required_error: "Please select a date and time",
            invalid_type_error: "That's not a date!" }),
    }),
    params:z.object({
        id: z.string({ required_error: 'Please send id in the params' }),
      }),
    })
    

    export const deleteMovieSchem = z.object({
        params: z.object({
          id: z.string({ required_error: 'Please send id in the params' }),
        }),
      });


      export const getOneSchem = z.object({
        query: z.object({
          id: z.string({ required_error: 'Please send id in the params' }),
        }),
      });



export type MovieSchemaType = TypeOf<typeof MovieSchema>['body'];


export type UpdataMovieSchemaType = z.infer<typeof UpdataMovieSchema>['params'];

export type TypegetOneSchem= z.infer<
  typeof getOneSchem>['query'];