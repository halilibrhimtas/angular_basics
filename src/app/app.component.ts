import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  name: string = "İbrahim";
  isUser: boolean = false;
  createdDate: Date = new Date();
  names:string[] = ["Halil","İbrahim"]
  isUsers: boolean[] = [false, false];
  type:any=5.5;
  type1: unknown = 5.5;
  
  constructor(){
    console.log(this.title);
    console.log(this.name);
    console.log(this.createdDate);
    console.log(`isUser: ${this.isUser}`); // bactick ` used!!
  }
  Method1(){
    this.type.toFixed();
    (this.type1 as number).toFixed();
    let name1: string = "ibo"; // metod içerisinde tanımlama yapmak için let kullanılıyor
  }

  
}

class Product{
  name:string;
  price:number;
  category: string;
  isPublish:boolean;

  constructor(name:string, price:number, category: string, isPublish:boolean){
    this.name = name;
    this.category = category;
    this.price = price;
    this.isPublish = isPublish;
  }

  topla(a1:number, a2:number){
    return a1+a2;
  }
}

class Product2 extends Product{
  constructor(name:string, price:number, category: string, isPublish:boolean, parametre2:Date){
    super(name, price,category, isPublish);
  }
  
  method2(){

  }
}

interface Product3 {
  Name:string;
  Price:number;
  SayHello: () => string;
}

class Car implements Product3{
  Name: string;
  Price: number;

  constructor(Name:string, Price:number){
    this.Name = Name;
    this.Price = Price;
  }

  SayHello () {
    return "Hello";
  };

}

class Car1{
  product: Product3 = {Name : "Car 1", Price: 200, SayHello: () => "Hello"}

  constructor(product:Product3){
    this.product = {Name : "Car 1", Price: 200, SayHello: () => "Hello"};
  }
}