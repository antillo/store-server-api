import { Router } from 'express'
import { UserController } from '../controllers/userController'

export class UsersRouter{

    router = Router()
    private usercontroller = new UserController()
    constructor(){
        this.routes()
    }

    private routes(){

    }
}