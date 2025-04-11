import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetComponent } from './greet/greet.component';
import { InlineHTMLCSSComponent } from './inline-htmlcss/inline-htmlcss.component';

import { BookComponent } from './book/book.component';
import { InlineAboutmeComponent } from './inline-aboutme/inline-aboutme.component';
import { BindingDemoComponent } from './binding-demo/binding-demo.component';
import { OuterComponent } from './outer/outer.component';
import { SquareOuterComponent } from './square-outer/square-outer.component';
import { CubeOuterComponent } from './cube-outer/cube-outer.component';
import { AdditionouterComponent } from './additionouter/additionouter.component';

import { SwitchComponent } from './switch/switch.component';
import { AttrDemoComponent } from './attr-demo/attr-demo.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';


@Component({
  selector: 'app-root',
  imports: [GreetComponent,InlineHTMLCSSComponent, BookComponent,InlineAboutmeComponent,BindingDemoComponent,OuterComponent,SquareOuterComponent,
    CubeOuterComponent,AdditionouterComponent,SwitchComponent,AttrDemoComponent,CustomDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyAngularProject';
}
