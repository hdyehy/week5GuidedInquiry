
function test (){
let pii = {
    name : 'matt',
    ssn : 56737,
    job : 'student',
    dob : '10/11/1934'
}
return {
    getName : function (){
        // return `Hello everyone, my name is ${pii.name} & I am a ${pii.job} and i was born ${pii.dob}`
        return pii.name
    },
    getJob : function(){
        return pii.job
    }
}
}

const na = test();

console.log(na.getName());
console.log(na.getJob());
console.log(test());
console.log(test(pii.ssn));