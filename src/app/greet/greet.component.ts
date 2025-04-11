import { Component } from '@angular/core';

@Component({
  selector: 'app-greet',
  imports: [],
  templateUrl: './greet.component.html',
  styleUrl: './greet.component.css'
})
export class GreetComponent {
  obj: any;

  constructor(){
    this.obj = {itemName:"mobile", price:95842}
  }

}
