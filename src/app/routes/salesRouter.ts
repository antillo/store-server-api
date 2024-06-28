import { Router } from "express";
import { SaleController } from "../controllers/saleController";

export class SalesRouter{

    router= Router()
    private salescontroller = new SaleController()
    constructor(){
        this.routes()
    }

    private routes(){

    }
}