import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    username!:string

    @Column()
    firstname!:string

    @Column()
    lastname!:string

    @Column()
    email!:string

    @Column()
    password!:string
}