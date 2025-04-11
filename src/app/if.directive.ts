import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {
  private hasViwe= false;


  constructor(private templatRef : TemplateRef<any>,
    private viweContainer: ViewContainerRef ) { }

    @Input() set appIf(condition:boolean){
      if(condition && ! this.hasViwe)
      {
        this.viweContainer.createEmbeddedView(this.templatRef)
        this.hasViwe=true
      }
      else if(!condition && this.hasViwe)
        this.viweContainer.clear();
      this.hasViwe=false;

    }

}
