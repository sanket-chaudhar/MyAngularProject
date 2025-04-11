import { Component } from '@angular/core';
import { IneerComponent } from '../ineer/ineer.component';

@Component({
  selector: 'app-outer',
  imports: [IneerComponent],
  templateUrl: './outer.component.html',
  styleUrl: './outer.component.css'
})
export class OuterComponent {
sentMsg ="welcome msg send from outer to ineer"

collectData = ""

collectFromInner(m:any)

{
this.collectData = m;
}



}
