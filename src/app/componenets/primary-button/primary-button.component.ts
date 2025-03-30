import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [],
  template: `
    <button
      (click)="btnClicked.emit()"
      class="bg-green-100 text-green-600 outline-3 text-md outline-green-500 font-semibold uppercase justify-between items-center shadow-md hover:opacity-90 px-6 py-1 rounded-full"
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
