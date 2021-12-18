//explicitly defining class shape using interface
// interface defines the syntax for classes to follow

interface User {
    userEmail: string
    phone?: number //optional property

    login():string
    logout(): string
}


// extends is for extending a class.
// implements is for implementing an interface

//Classes that are derived from an interface must follow the structure provided by their interface.
//super cannot be used in interface derived class

abstract class Employee implements User{
    userEmail: string
    empCode: number
    empName: string
    empSalary: number
    empBonus: number

    constructor(email:string, code:number, name: string, salary: number, bonus: number){
        this.userEmail = email
        this.empCode = code
        this.empName = name
        this.empSalary = salary
        this.empBonus = bonus

    }

    login(): string {
        return `Employee ${this.empName} has just logged in`
        
    }

    logout(): string{
        return `Employee ${this.empName} has logged out`
    }

    //class derived from interface can also have additional methods not defined in interface

    //abstraction
    private calcSalary(): number {
        return this.empSalary + this.empBonus
    }
    //calcSalary is private to this Employee class and child class, cannot be accessed from other class.

    public getSalary(): number {
        return this.calcSalary()
        
    }

    public showSalary(): string {
        const salary: number = this.getSalary()
        return `Employee ${this.empName}'s total salary is Rs. ${salary}.`
    }
}

//child class inherited from parent abstract class Employee
// child class of an abstract class does not need to follow all structures provided by their parent abstract class

class Manager extends Employee{

    managerDept: string

    constructor(email:string, code:number, name: string, dept:string, salary:number, bonus:number){
        super(email,code,name,salary,bonus)
        this.managerDept = dept
    }

    //overriding showSalary() method from parent class
    public showSalary(): string {
        const managerSalary: number = super.getSalary()
        return `Manager ${this.empName}'s total salary is ${managerSalary}`
    }
    //showSalary() method has more than one form. So polymorphism.

}


//multiple inheritance from Employee class
//Polymorphism - Employee has more than one form.

class Developer extends Employee{

    developerPosition: string

    constructor(email:string, code:number, name: string, salary: number, bonus: number, position:string){
        super(email,code,name,salary,bonus)
        this.developerPosition = position
    }

    getPosition(): string {
        return this.developerPosition
    }

    login(): string{
        return `Developer ${this.empName} has logged in`
    }

}

// multiple derivation from Interface User
class Intern implements User{
    userEmail: string
    internPosition: string

    constructor(email: string, position: string) {
        this.userEmail = email
        this.internPosition = position
    }

    login(): string{
        return `intern ${this.userEmail} has logged in`
    }

    logout(): string{
        return `intern ${this.userEmail} has logged out`
    }

    getInternPosition(): string {
        return `Intern position is ${this.internPosition} `
    }
}

// trying to create instance of abstract class
// let userOne: Employee = new Employee('fds@gmail.com', 2, 'fds', 1000, 200)
//throws error: cannot create instance of an abstract class

let managerOne: Manager = new Manager('ank.knr@gmail.com', 1, 'Ankush', 'Design Team', 10000, 3000 )
let developerOne: Developer = new Developer('snit@gmail.com', 2, 'Sanit', 5000, 1500, 'junior')
let internOne: Intern = new Intern('fre@intern.com','software engineer intern')

