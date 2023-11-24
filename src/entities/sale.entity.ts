import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sale{
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    date!:Date

}