class persons{
    static age="";
    static yer="2012"
    getage(text){
        return persons.age=text;
    }

    getyear(text){
        return persons.yer=text;
    }




}

const b=new persons();
console.log(persons.age);
console.log(b.getage("b"));
console.log(b.getage("c"));


console.log(persons.yer);
console.log(b.getyear("2014"));
console.log(b.getyear("2015"));

