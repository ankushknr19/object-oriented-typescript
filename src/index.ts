//explicitly defining class shape using interface
// interface defines the syntax for classes to follow

interface User {
    userEmail: string
    phone?: number

    login():string
    logout(): string
}


// extends is for extending a class.
// implements is for implementing an interface

//Classes that are derived from an interface must follow the structure provided by their interface.

abstract class Employee implements User{
    userEmail: string
    empCode: number
    empName: string

    constructor(email:string, code:number, name: string){
        this.userEmail = email
        this.empCode = code
        this.empName = name
    }

    login(): string {
        return `${this.empName} has just logged in`
        
    }

    logout(): string{
        return `${this.empName} has logged out`
    }
}

//child class inherited from parent Employee
class Manager extends Employee{

    managerSalary: number
    managerBonus: number

    constructor(email:string, code:number, name: string, salary:number, bonus:number){
        super(email,code,name)
        this.managerSalary = salary
        this.managerBonus = bonus
    }

    
    calcSalary(): string {
        let sum:number = this.managerSalary + this.managerBonus
        return `Manager ${this.empName}'s total salary is Rs. ${sum}`
    }

    getSalary(): string {
        return this.calcSalary()
    }
}

//inherit from Employee class

class Developer extends Employee{

    developerPosition: string

    constructor(email:string, code:number, name: string, position:string){
        super(email,code,name)
        this.developerPosition = position
    }

    getPosition(): string {
        return this.developerPosition
    }

    login(): string{
        return `Developer ${this.empName} has logged in`
    }

}

let managerOne: Manager = new Manager('manager@gmail.com', 1, 'Ankush', 10000, 3000)
// let userOne: Employee = new Employee('fds@gmail.com', 2, 'fds') trying to create instance of abstract class
let developerOne: Developer = new Developer('dev@gmail.com',3,'Sanit','junior')


