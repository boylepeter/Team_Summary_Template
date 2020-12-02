// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// * officeNumber

// * getRole() // Overridden to return 'Manager'

class Manager extends Employee{
    constructor(officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole(){
        return Manager
    }
}

