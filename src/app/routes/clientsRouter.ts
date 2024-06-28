import { Router } from "express";
import { ClientController } from "../controllers/clientController";


export class ClientsRouter{

    router = Router()
    private clientcontroller = new ClientController()
    constructor(){
        this.routes()
    }

    private routes(){

    }
}