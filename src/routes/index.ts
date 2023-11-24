import { Router } from "express";
import { ArticlesRouter } from "./articlesRouter";
import { ClientsRouter } from "./clientsRouter";
import { SalesRouter } from "./salesRouter";
import { UsersRouter } from "./usersRouter";

const router = Router();


router.use('/articles', new ArticlesRouter().router);
router.use('/clients',new ClientsRouter().router)
router.use('/sales',new SalesRouter().router)
router.use('/users',new UsersRouter().router)


export default router;
