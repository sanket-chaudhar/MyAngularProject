import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ineer',
  imports: [],
  templateUrl: './ineer.component.html',
  styleUrl: './ineer.component.css'
})
export class IneerComponent {
  sendDataInnerToOuter ="Send Data From Inner To Outer"
@Input() ineermsg:string|undefined

@Output() innerOutMsg = new EventEmitter()

sendData(){
  this.innerOutMsg.emit(this.sendDataInnerToOuter)
}


}
