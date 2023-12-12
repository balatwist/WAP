let student={
    firstName:"Peter",
    lastName:"Welch",
    grades:[],
    insertGrade:function(newGrade){
        student.grades.push(newGrade);
    },
    computeAverageGrade: function(){
        
        if(this.grades.length== 0){
            return 0;

        }

        let sum=this.grades.reduce((a,grades)=>a+grades,0);
        return sum/this.grades.length;
        

    }

}
let stu1=Object.create(student);
stu1.insertGrade(78);
stu1.insertGrade(80);

console.log("Average Grade of stu1 :", stu1.computeAverageGrade());
student.insertGrade(85);
student.insertGrade(90);
console.log("Average Grade:", student.computeAverageGrade());



