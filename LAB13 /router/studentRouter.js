let express = require("express");
let router = express.Router();
let studentController = require("../controller/studentController");


router.get('/search', studentController.searchByProgram);  
router.put('/:id', studentController.updateStudentById);
router.get('/:id', studentController.getStudentById)
router.post('/', studentController.createStudent)
router.delete('/:id', studentController.deleteStudentById)
router.get('/', studentController.getStudents)














module.exports = router;