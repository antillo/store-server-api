import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client{
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    name!:string;


}