import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sn-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sn-table-wrapper" [ngClass]="['sn-table-' + variant]" [class.sn-table-scrollable]="scrollable">
      <table class="sn-table" [ngClass]="['sn-table-' + variant]">
        <ng-content></ng-content>
      </table>
    </div>
  `,
  styleUrl: './neon-table.css',
  encapsulation: ViewEncapsulation.None,
})
export class NeonTable {
  @Input() variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'dark' = 'primary';
  @Input() scrollable: boolean = false;
  @Input() striped: boolean = true;
  @Input() hover: boolean = true;
}
