
 export class  Animal {
  constructor(name,age = 0){
    console.log(name,age)
    this.name = name;
    this.age = age;
  }

  say(){
    console.log(this.name,this.age)
  }
}

class Cat extends Animal{
 constructor(name,age){
   super('name', 20);
 }
 say(){
  //  super.say('app2','app3'); //先执行父亲类
   console.log('这是子类的say,可以覆盖父类的')
 }

}
const cat = new Cat();
cat.say();