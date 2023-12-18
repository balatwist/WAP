let Student = require("../model/student")

let controller = {
    getStudents: function (req, res, next) {
        let allStudents = Student.getStudents();
        res.status(200).json(allStudents);
    },
    getStudentById: function (req, res, next) {
        let id = req.params.id;
        let student = Student.getStudentById(id);
        if (student)
            res.status(200).json(student);
        else
            res.status(404).json({ message: "student not found..." });
    },
    deleteStudentById: function (req, res, next) {
        let id = req.params.id;
        let student = Student.deleteStudentById(id);
        if (student) res.status(200).json(student)
        else
            res.status(404).json({ message: "not found" })
    },
    createStudent: function (req, res, next) {
        let { id, name, program } = req.body;
        let student = new Student(id, name, program);
        let newCreatedStudent = student.addStudent();
        if (newCreatedStudent) 
        res.status(200).json(newCreatedStudent);
        else res.status(404).json({ message: " already registered.." })
    },
    updateStudentById: function (req, res, next) {
        let id = req.params.id;
        let { name, program } = req.body;
        let student = Student.getStudentById(id);

        if (student) { 
            student.updateStudent(name, program);
            res.status(200).json(student);
        } else {
            res.status(404).json({ message: "Student not found" });
        }
    },

    searchByProgram: function (req, res, next) {
        let program = req.query.program;
    
        if (!program) {
          res.status(400).json({ message: 'Program parameter is missing' });
          return;
        }
    
        // Corrected variable name: use Student instead of students
        let students = Student.searchByProgram(program);
    
        if (students.length > 0) {
          res.status(200).json(students);
        } else {
          res.status(404).json({ message: 'No students found for the given program' });
        }
      }
}
module.exports = controller;