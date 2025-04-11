import { Component } from '@angular/core';
import { AdditionineerComponent } from '../additionineer/additionineer.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-additionouter',
  imports: [AdditionineerComponent,FormsModule,RouterOutlet],
  templateUrl: './additionouter.component.html',
  styleUrl: './additionouter.component.css'
})
export class AdditionouterComponent {
num1:any
num2:any

final:any
showaddition(n:any){
 this.final = n;

  
}
}
