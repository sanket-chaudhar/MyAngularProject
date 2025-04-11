import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square-inner',
  imports: [],
  templateUrl: './square-inner.component.html',
  styleUrl: './square-inner.component.css'
})
export class SquareInnerComponent {
  @Input() squareenum:any
  @Output() squareOut = new EventEmitter()
Calculatesquare()
{
 // alert(parseInt(this.squareenum)*parseInt(this.squareenum))
 this.squareOut.emit(parseInt(this.squareenum)*parseInt(this.squareenum))
}
}
