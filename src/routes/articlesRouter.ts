import { Router } from "express";
import {ArticleController} from '../controllers/articleController'

export class ArticlesRouter{

    router = Router();
    private controller = new ArticleController();
    constructor(){
        this.routes()
    }

    private routes(){
        this.router.get('/',(req,res)=>this.controller.getAll(req,res));
        this.router.put('/:id',)
        this.router.post('/',)
        this.router.delete('/:id',)
    }
}