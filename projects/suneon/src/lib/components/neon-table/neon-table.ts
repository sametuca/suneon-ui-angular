import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sn-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sn-table-wrapper" [class.sn-table-scrollable]="scrollable">
      <table class="sn-table" [class]="'sn-table-' + variant">
        <ng-content></ng-content>
      </table>
    </div>
  `,
  styleUrl: './neon-table.css',
})
export class NeonTable {
  @Input() variant: 'primary' | 'secondary' | 'dark' = 'primary';
  @Input() scrollable: boolean = false;
  @Input() striped: boolean = true;
  @Input() hover: boolean = true;
}
