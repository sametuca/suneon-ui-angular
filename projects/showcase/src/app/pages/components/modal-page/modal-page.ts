import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeonModal } from 'suneon';

type ModalVariant = 'primary' | 'danger' | 'success';

@Component({
  selector: 'app-modal-page',
  standalone: true,
  imports: [CommonModule, NeonModal],
  templateUrl: './modal-page.html',
  styleUrl: './modal-page.css'
})
export class ModalPageComponent {
  variantsList: ModalVariant[] = ['primary', 'danger', 'success'];

  primaryModalOpen = false;
  secondaryModalOpen = false;
  successModalOpen = false;
  dangerModalOpen = false;

  get variants(): ModalVariant[] {
    return this.variantsList;
  }

  openModal(type: 'primary' | 'secondary' | 'success' | 'danger'): void {
    if (type === 'primary') this.primaryModalOpen = true;
    if (type === 'secondary') this.secondaryModalOpen = true;
    if (type === 'success') this.successModalOpen = true;
    if (type === 'danger') this.dangerModalOpen = true;
  }

  closeModal(type: 'primary' | 'secondary' | 'success' | 'danger'): void {
    if (type === 'primary') this.primaryModalOpen = false;
    if (type === 'secondary') this.secondaryModalOpen = false;
    if (type === 'success') this.successModalOpen = false;
    if (type === 'danger') this.dangerModalOpen = false;
  }

  handleConfirm(type: string): void {
    console.log(`Confirmed: ${type}`);
    this.closeModal(type as any);
  }
}
