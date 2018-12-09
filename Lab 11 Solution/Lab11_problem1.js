function University(name, dept) {
    this.name = name;
    this.dept = dept;
    this.graduation = function (year) {
        console.log("Graduating " + this.dept + " " + year + " student");
    };
}
var mum = new University("MUM", "Computer Science");
mum.graduation(2019);
