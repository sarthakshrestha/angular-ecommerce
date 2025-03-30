import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button
      (click)="btnClicked.emit()"
      class=" outline-3 text-md  justify-between uppercase  items-center shadow-md font-semibold  hover:opacity-90 px-6 py-1 rounded-full"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class PrimaryButtonComponent {
  label = input('');
  btnClicked = output();
}
