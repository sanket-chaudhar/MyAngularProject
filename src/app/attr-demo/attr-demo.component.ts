import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-demo',
  imports: [CommonModule],
  templateUrl: './attr-demo.component.html',
  styleUrl: './attr-demo.component.css'
})
export class AttrDemoComponent {
  color = 'blue'

  fsize = 30 

}
