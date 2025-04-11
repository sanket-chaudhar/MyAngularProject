import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-binding-demo',
  imports: [FormsModule],
  templateUrl: './binding-demo.component.html',
  styleUrl: './binding-demo.component.css'
})
export class BindingDemoComponent {
name1 = "xuz";
imgpath="images/tiger.jpg"
imgwidth="500"


msg= "wel come"

m1= " "
display(){
  this.m1=this.msg.toUpperCase()
}
num1=""
num2=""
sum=""
add(){
this.sum = this.num1+this.num2
}

}
