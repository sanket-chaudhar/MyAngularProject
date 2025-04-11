import { Component } from '@angular/core';
import { CubeinnerComponent } from '../cubeinner/cubeinner.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cube-outer',
  imports: [CubeinnerComponent,FormsModule],
  templateUrl: './cube-outer.component.html',
  styleUrl: './cube-outer.component.css'
})
export class CubeOuterComponent {
  num:any
  numOut:any
  showsquare(n:any){
    this.numOut=n
  }

  

}
