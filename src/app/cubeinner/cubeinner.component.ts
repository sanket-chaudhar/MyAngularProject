import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-cubeinner',
  imports: [],
  templateUrl: './cubeinner.component.html',
  styleUrl: './cubeinner.component.css'
})
export class CubeinnerComponent {
  @Input() cubenum: any
  @Output() cubeout = new EventEmitter()

  calculatecube(){
    //alert(parseInt(this.cubenum)*parseInt(this.cubenum)*parseInt(this. cubenum))
    this.cubeout.emit(parseInt(this.cubenum)*parseInt(this.cubenum)*parseInt(this. cubenum))
  }

}
