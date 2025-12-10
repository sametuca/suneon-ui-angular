import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  HostListener,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DropdownItem {
  label: string;
  value: any;
  icon?: string;
  disabled?: boolean;
  divider?: boolean;
}

@Component({
  selector: 'sn-dropdown',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sn-dropdown" [ngClass]="['sn-dropdown-' + variant, 'sn-dropdown-' + size]">
      <button
        class="sn-dropdown-trigger"
        [class.open]="isOpen"
        [disabled]="disabled"
        (click)="toggle()"
      >
        <span class="sn-dropdown-label">{{ selectedItem?.label || placeholder }}</span>
        <span class="sn-dropdown-arrow">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </button>

      <div class="sn-dropdown-menu" [class.open]="isOpen" [class.up]="openDirection === 'up'">
        <div class="sn-dropdown-menu-inner">
          <ng-container *ngFor="let item of items; let i = index">
            <div *ngIf="item.divider" class="sn-dropdown-divider"></div>
            <button
              *ngIf="!item.divider"
              class="sn-dropdown-item"
              [class.selected]="selectedItem?.value === item.value"
              [class.disabled]="item.disabled"
              [disabled]="item.disabled"
              (click)="selectItem(item)"
            >
              <span *ngIf="item.icon" class="sn-dropdown-item-icon">{{ item.icon }}</span>
              <span class="sn-dropdown-item-label">{{ item.label }}</span>
              <span *ngIf="selectedItem?.value === item.value" class="sn-dropdown-check">✓</span>
            </button>
          </ng-container>
        </div>
      </div>
    </div>
  `,
  styleUrl: './neon-dropdown.css',
  encapsulation: ViewEncapsulation.None,
})
export class NeonDropdown {
  @Input() items: DropdownItem[] = [];
  @Input() placeholder: string = 'Select an option';
  @Input() variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled: boolean = false;
  @Input() openDirection: 'down' | 'up' = 'down';

  @Input()
  get value(): any {
    return this._value;
  }
  set value(val: any) {
    this._value = val;
    this.selectedItem = this.items.find((item) => item.value === val) || null;
  }
  private _value: any = null;

  @Output() valueChange = new EventEmitter<any>();
  @Output() selectionChange = new EventEmitter<DropdownItem>();

  isOpen = false;
  selectedItem: DropdownItem | null = null;

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  toggle() {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  selectItem(item: DropdownItem) {
    if (item.disabled) return;

    this.selectedItem = item;
    this._value = item.value;
    this.valueChange.emit(item.value);
    this.selectionChange.emit(item);
    this.isOpen = false;
  }
}
