import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { HoverDirective } from '../hover.directive';
import { IfDirective } from '../if.directive';

@Component({
  selector: 'app-custom-directives',
  imports: [HighlightDirective,HoverDirective,IfDirective],
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.css'
})
export class CustomDirectivesComponent {

  condition: boolean = false

}
