import { Position } from "./position.entity";
import { Department } from "./department.entity";

export class Employee {
    name: string;
    email: string;
    department: Department;
    position: Position;
    hoursWorked: number;
    penalties: number;
}