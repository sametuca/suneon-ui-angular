import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeonInput } from 'suneon';

type InputVariant = 'primary' | 'secondary' | 'success' | 'danger';

@Component({
  selector: 'app-input-page',
  standalone: true,
  imports: [CommonModule, NeonInput],
  templateUrl: './input-page.html',
  styleUrl: './input-page.css'
})
export class InputPageComponent {
  variantsList: InputVariant[] = ['primary', 'secondary', 'success', 'danger'];
  sizes = ['sm', 'md', 'lg'];

  primaryValue = '';
  secondaryValue = '';
  successValue = '';
  dangerValue = '';
  disabledValue = 'Disabled input';
  passwordValue = '';
  emailValue = '';

  get variants(): InputVariant[] {
    return this.variantsList;
  }

  onValueChange(newValue: string | Event): void {
    const value = newValue instanceof Event ? (newValue.target as HTMLInputElement).value : newValue;
    console.log('Input changed:', value);
  }
}
