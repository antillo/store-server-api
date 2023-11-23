import {Request,Response} from 'express'
import { ArticleService } from '../services/articleService'

export class ArticleController{

    constructor(){
        
    }

    getAll(req:Request,res:Response){
        res.status(200).json({"articulo":"uno"})
    }
}