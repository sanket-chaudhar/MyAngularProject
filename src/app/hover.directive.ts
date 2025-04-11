import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input() appHover = ""
  

  constructor( private e1:ElementRef) { }
    
  @HostListener("mouseenter") onmouseenter(){
    this.HighLight(this.appHover)
  }
  @HostListener("mouseleave") onmouseleave(){
    this.HighLight("")
  }

  HighLight(color: string)
  {
    this.e1.nativeElement.style.color = color;
  }


}
