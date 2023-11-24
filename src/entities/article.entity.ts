import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article{
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    name!:string;

}