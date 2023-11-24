import express, {Request,Response,NextFunction} from "express";
import morgan from 'morgan';
import * as dotenv from 'dotenv'
import cors from "cors";
import helmet from "helmet";
import { StatusCodes } from "http-status-codes";

import {DataSource} from "typeorm";

import logger from "./shared/logger";

import BaseRouter from './routes'
import { AppDataSource } from "./config/data.source";

dotenv.config()

export default class Server{
    app
    private port:number
    constructor(){
        this.app = express()
        this.port = Number(process.env['PORT'])
        this.dbConnect();
        if (process.env.NODE_ENV === 'development'){
            this.app.use(morgan('dev'));
        }else{
            this.app.use(helmet())
        }
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use('/api',BaseRouter)

        this.app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
            logger.error(err.message,err);
            return res.status(StatusCodes.BAD_REQUEST).json(
                {
                    error: err.message,
                });
        });

    }

    private async dbConnect():Promise<DataSource | void>
    {
        try {
            await AppDataSource.initialize();
            logger.info("Connected to database");
        } catch (err) {
            console.log(err);
        }
    }

    public start(){
        this.app.listen(this.port,()=>{
            console.log('Servidor iniciado en el puerto', this.port)
        })
    }
 
}

