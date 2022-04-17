
class person{
    static age=0;
    getage(){
        return person.age++;
    }
}

const a=new person();
console.log(a.getage());

console.log(a.getage());