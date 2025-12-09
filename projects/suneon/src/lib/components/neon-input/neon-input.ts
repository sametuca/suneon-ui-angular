import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sn-neon-input',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="sn-input-group" [ngClass]="'sn-input-' + variant">
      <label class="sn-input-label" *ngIf="label">{{ label }}</label>
      <input
        class="sn-input-field"
        [type]="type"
        [placeholder]="placeholder"
        [value]="value"
        (input)="onInputChange($event)"
        (blur)="onBlur.emit()"
        [disabled]="disabled"
        [class.sn-input-lg]="size === 'lg'"
        [class.sn-input-sm]="size === 'sm'"
      />
      <div class="sn-input-border"></div>
    </div>
  `,
  styleUrl: './neon-input.css',
})
export class NeonInput {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() variant: 'primary' | 'secondary' | 'success' | 'danger' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Output() onBlur = new EventEmitter<void>();

  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;
    this.valueChange.emit(inputValue);
  }
}
