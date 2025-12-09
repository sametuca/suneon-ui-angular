import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sn-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sn-modal-backdrop" *ngIf="isOpen" (click)="closeModal()" [class.sn-modal-open]="isOpen"></div>
    <div class="sn-modal" *ngIf="isOpen" [class]="'sn-modal-' + variant">
      <div class="sn-modal-header">
        <h2>{{ title }}</h2>
        <button class="sn-modal-close" (click)="closeModal()">×</button>
      </div>
      <div class="sn-modal-body">
        <ng-content></ng-content>
      </div>
      <div class="sn-modal-footer" *ngIf="showFooter">
        <button class="sn-modal-btn sn-modal-btn-cancel" (click)="closeModal()">Cancel</button>
        <button class="sn-modal-btn sn-modal-btn-confirm" (click)="onConfirm()">Confirm</button>
      </div>
    </div>
  `,
  styleUrl: './neon-modal.css',
})
export class NeonModal {
  @Input() isOpen: boolean = false;
  @Input() title: string = 'Modal';
  @Input() variant: 'primary' | 'danger' | 'success' = 'primary';
  @Input() showFooter: boolean = true;
  @Output() onClose = new EventEmitter<void>();
  @Output() onConfirmed = new EventEmitter<void>();

  closeModal() {
    this.onClose.emit();
  }

  onConfirm() {
    this.onConfirmed.emit();
  }
}
