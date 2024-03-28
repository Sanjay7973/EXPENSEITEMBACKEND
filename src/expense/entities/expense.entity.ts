import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Expense {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title: string;
    
    @Column()
    amount: number

    @Column({ type: 'date' })
    dateAdded: Date;

}
