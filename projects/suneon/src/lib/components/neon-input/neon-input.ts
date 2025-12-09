import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sn-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="sn-input-group" [class]="'sn-input-' + variant">
      <label class="sn-input-label" *ngIf="label">{{ label }}</label>
      <input
        class="sn-input-field"
        [type]="type"
        [placeholder]="placeholder"
        [(ngModel)]="value"
        (change)="onChange.emit(value)"
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
  @Input() value: any = '';
  @Output() onChange = new EventEmitter<any>();
}
