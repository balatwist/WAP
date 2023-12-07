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
student.insertGrade(85);
student.insertGrade(90);
console.log("Average Grade:", student.computeAverageGrade());