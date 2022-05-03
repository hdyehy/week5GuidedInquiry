class PersonCl{
    constructor(name, job, age) {
        this.name=name;
        this.job=job;
        this.age=age;
        this.busy=false;
    }
    
    exercise(){
        console.log (`Is your ${this.name} Running? You better go catch them!`);
    }
    
    fetchJob(){
        console.log(`${this.name} is a ${this.job}.`)
    }
}

class ProgrammerCl extends PersonCl{
constructor (name, job, age, languages) {
super(name, job, age) ;
// this. languages=languages Il [1;
this.languages=[languages];
this.busy=true;
}
completeTask(){
if (this.completeTask.busy){
this.busy=false;
console.log(` ${this.name} is no longer busy, please assign a new task!`);
}else
    console. log (` ${this. name} is not busy.`);

}
offerNewTask(){
    if (this.offerNewTask.busy){
        console. log(`${this. name} is not busy, would love more responsibility.`);
    }else
        console. log(`${this.name} is too busy to accept new assignments.`);
}
learnLanguage (language) {
    this.languages.push(language);
    console.log(`${this.name} has learned a new language, ${language}!`);
}
    listLanguage(){
    console. log (`${this.name} knows ${this.languages.toString()}.`);
    }

}

const matt = new ProgrammerCl ("matt", "Front End Developer", 24, "tired") ;

matt.exercise();
matt.fetchJob();
matt.completeTask();
matt.offerNewTask();
matt. learnLanguage ("javascript") ;
matt. learnLanguage ("python") ;
matt.listLanguage();