import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { AdditionouterComponent } from '../additionouter/additionouter.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-additionineer',
  imports: [],
  templateUrl: './additionineer.component.html',
  styleUrl: './additionineer.component.css'
})
export class AdditionineerComponent {
  @Input()
 num1:any
 @Input()
 num2:any

 @Output() additionOut = new EventEmitter()


  calculateaddition(){
   // alert(parseInt(this.num1)+parseInt(this.num2))

   this.additionOut.emit(parseInt(this.num1)+parseInt(this.num2))

  }

}
