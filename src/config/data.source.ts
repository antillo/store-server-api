import {DataSource,DataSourceOptions} from 'typeorm'
import * as dotenv from "dotenv";

dotenv.config()

const Config: DataSourceOptions = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities:[__dirname + "/../entities/*.entity{.ts,.js}"],
    migrations:[__dirname + "../migrations/*{.ts,.js}"],
    synchronize:false,
    migrationsRun: true,
    logging:true,
    
}

export const AppDataSource: DataSource = new DataSource(Config);