function Student(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    this.grades=[];
}

Student.prototype.insertGrade=function(newGrade){
    
    this.grades.push(newGrade);

}

Student.prototype.computeAverageGrade=function(){
    let sum=this.grades.reduce((a,grades)=>a+grades,0);
    return sum/this.grades.length;
    

}

let Student1=new Student("Jonny","Walker");
Student1.insertGrade(90);
Student1.insertGrade(85);
Student1.insertGrade(99);

console.log(Student1.computeAverageGrade())


//Question3


Array.prototype.mySort = function() {
    return this.sort((a, b) => a - b);
};

Student1.grades.mySort();
console.log("Sorted Grades:", Student1.grades);