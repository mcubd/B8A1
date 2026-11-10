# Access Modifiers(`public`,`private`,`protected` and `readonly`) in TypeScript OOP:How they work?

In Typescript,Access Modifiers are used to control the behavior of the property of Class.Who can access the properties and who can not ,its controlled by these Access Modifiers.

## How they work?

There are four Access Modifiers in TypeScript.`public`,`private`,`protected` and `readonly`.

`public` gives the property the full access.I can read or write that property outside of its own class.Even inherited Classes can read/write the property.

`private` gives the property lest access.I can't read/write the property outside of its own class.Inherited Classes are also forbidden from read/write access.

`protected` forbids the property from read/write access outside of its own class but inherited classes are granted read/write access.

`readonly` forbids the property from any kind of writing,Either its outside its own class,inside its own class or inside inherited class.Reading is allowed only. Either its outside its own class,inside its own class or inside inherited class.

```typescript
class Employee{

  constructor(
    public name:string,
    private salary:number,
    protected emp_id:number,
    public readonly nationality:string
  ){}

  info(){
    // Inside class private or protected, any properties can be  readed
    return `Name:${this.name}  Employee_Id${this.emp_id} Salary${this.salary} Nationality${this.nationality}`
  }

  change(){
    this.name="new name"
    this.salary=12000
    this.emp_id=16
    // cant write nationality ,beacause its readonly
    // this.nationality="American"
  }

}


class Manager extends Employee{

  cheak(){
    // can access name and emp_id,because of public and protected 
    console.log(this.name);
    console.log(this.emp_id);

    // cant access salary  ,because of private  
    // console.log(this.salary);
    
    
  }
}





const emp=new Employee("Shawon",10000,12,"Bangladeshi")

console.log(emp.name);
console.log(emp.nationality);
// cant read ,because of private or protected
// console.log(emp.salary);
// console.log(emp.emp_id);

emp.name="Mizan mia"
// cant write ,because of private or protected or readonly
// emp.nationality="British"
// emp.salary=14000
// emp.emp_id=20

```





## Conclusion
Access Modifiers are an essential part of TypeScript OOP.It controls the flow of read/write access of class properties,Eliminating accidental writing of properties and cencoring sensetive properties(eg...Nid no.) and keeping them private. It saves a lot of time as we can breath that all my properties are working without unwanted overeriting.


