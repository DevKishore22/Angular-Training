import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrimNumbers]',
})
export class TrimNumbersDirective {
  constructor(private el: ElementRef) {}
  @HostListener('input') trimNumbers() {
    this.el.nativeElement.value = this.el.nativeElement.value.replace(
      /[0-9]/g,
      ''
    );
  }
}
