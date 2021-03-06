import { ModeOfEntry } from "../../../student-registration/studentRegistration.types";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../../student-registration/users/entities/user.entity";


@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    firstName: string;

    @Column({nullable: true})
    middleName: string;
  
    @Column({ nullable: true })
    lastName: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    dateOfBirth: Date;

    @Column({nullable: true})
    nationality: string

    @Column({nullable: true})
    address: string

    @Column()
    department: string;

    @Column({nullable: true})
    matriculationNumber: string;

    @Column({type: 'enum', enum: ModeOfEntry, default: ModeOfEntry.UTME})
    modeOfEntry: ModeOfEntry;

    @Column()
    programOfStudy: string;

    @Column({default: new Date().getFullYear()})
    yearOfEntry: number;

    @JoinColumn()
    @OneToOne((type) => User, (user) => user.student, {cascade:true})
    user: User;
}
