import express, { Application } from "express";
import { Request,Response } from "express";
import * as dotenv from 'dotenv'
import cors from "cors";
import helmet from "helmet";

import { ArticlesRouter } from "./routes/articlesRouter";
import { ClientsRouter } from "./routes/clientsRouter";
import { SalesRouter } from "./routes/salesRouter";
import { UsersRouter } from "./routes/usersRouter";

dotenv.config()

export default class Server{
    app
    private port:number
    constructor(){
        this.app = express()
        this.port = Number(process.env['PORT'])
        this.app.use(helmet())
        this.app.use(cors())
        this.app.use(this.routes())
    }

    private routes(): Array<express.Router>{
        const routes : Array<express.Router> = new Array<express.Router>()

        routes.push(new ArticlesRouter().router)
        routes.push(new ClientsRouter().router)
        routes.push(new SalesRouter().router)
        routes.push(new UsersRouter().router)

        return routes
    }
    public start(){
        this.app.listen(this.port,()=>{
            console.log('Servidor iniciado en el puerto', this.port)
        })
    }
 
}

