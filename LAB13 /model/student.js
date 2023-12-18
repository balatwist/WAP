let db = [
    { id: 616001, name: "Benton Plirs", program: "Compro" },
    { id: 616002, name: "David Morgan", program: "Compro" },
    { id: 616003, name: "Brittany Hamilton", program: "MBA" }
];

class Student {
    constructor(id, name, program) {
        this.id = id
        this.name = name
        this.program = program
    }
    addStudent() {
        if (!db.find(s => s.id == this.id)) {
            db.push(this)
            return this;
        }
    }
    static getStudents() {
        return db;
    }
    static getStudentById(id) {
        return db.find(s => s.id == id);
    }
    static deleteStudentById(id) {
        let index = db.findIndex(s => s.id == id)
        if (index !== -1) return db.splice(index, 1);
    }

    updateStudent(name, program) {
        let student = db.find(s => s.id == this.id);
        if (student) {
            student.name = name || student.name;
            student.program = program || student.program;
            return student;
        }
    }

    static searchByProgram(program) {
        if (!program) {
            return [];
        }
    
        return db.filter((student) => student.program.toLowerCase() === program.toLowerCase());
    }
    

}

module.exports = Student;