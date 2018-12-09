function University(name: string, dept:string): void{
    this.name=name;
    this.dept=dept;
   this.graduation= function(year:Date): void{
    console.log(`Graduating ${this.dept} ${year} student`);
    }
}

var mum=new University("MUM", "Computer Science")
mum.graduation(2019);