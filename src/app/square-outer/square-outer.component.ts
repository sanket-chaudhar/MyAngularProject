import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SquareInnerComponent } from '../square-inner/square-inner.component';

@Component({
  selector: 'app-square-outer',
  imports: [FormsModule, SquareInnerComponent],
  templateUrl: './square-outer.component.html',
  styleUrl: './square-outer.component.css'
})
export class SquareOuterComponent {

  num:any
  numOut:any
  showsquare(n:any){
this.numOut=n
  }
}
