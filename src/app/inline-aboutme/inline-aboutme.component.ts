import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-aboutme',
  imports: [],
  template: `
    <p>
      inline-aboutme works! hello word
    </p>
    <i><h3> hello world</h3></i>
  `,
  styles: `p{color:green}
  h3{color:red} 
  ` 
      
})
export class InlineAboutmeComponent {

}
