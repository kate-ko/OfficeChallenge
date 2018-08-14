class Document {
    constructor (name) {
        this.EmployeeName = name;
    }
}

class Employee {
    constructor (name) {
        this.name = name;
    }

    work(office) {
        let doc = new Document(this.name);
        let numDocs = 10;
        for (let i = 0; i < numDocs; i++) {
            office.documents.push(doc);
        }
    }  
}

class Manager {
    constructor (name) {
        this.employees = [];
        this.name = name;
    }

    hireEmployee(name) {
        let newEmp = new Employee(name);
        this.employees.push(newEmp); 
    }

    askEmployeesToWork(office) {
        for (let emp of this.employees) {
            emp.work(office);
        }
    }
}

class Cleaner {
    constructor (name) {
        this.name = name;
    }
    clean() {
        console.log("Clean");
    }
}

class Office {
    constructor () {
        this.documents = [];
        this.managers = [];
        this.cleaners = [];
    }

    hireCleaner(name) {
        let newCleaner = new Cleaner(name);
        this.cleaners.push(newCleaner);
    }

    hireManager(name) {
        let newManager = new Manager(name);
        this.managers.push(newManager);
    }

    startWorkDay() {
        for (let manag of this.managers) {
            manag.askEmployeesToWork(this);
        }

        for (let cleaner of this.cleaners) {
            cleaner.clean();
        }
    }
}







