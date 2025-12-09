import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeonTable } from 'suneon';

type TableVariant = 'primary' | 'secondary' | 'dark';

interface TableRow {
  id: number;
  name: string;
  email: string;
  status: string;
  joined: string;
}

@Component({
  selector: 'app-table-page',
  standalone: true,
  imports: [CommonModule, NeonTable],
  templateUrl: './table-page.html',
  styleUrl: './table-page.css'
})
export class TablePageComponent {
  variantsList: TableVariant[] = ['primary', 'secondary', 'dark'];

  tableData: TableRow[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', status: 'Active', joined: '2024-01-15' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', status: 'Active', joined: '2024-02-20' },
    { id: 3, name: 'Carol White', email: 'carol@example.com', status: 'Inactive', joined: '2024-03-10' },
    { id: 4, name: 'David Brown', email: 'david@example.com', status: 'Active', joined: '2024-04-05' },
    { id: 5, name: 'Eve Davis', email: 'eve@example.com', status: 'Active', joined: '2024-05-12' },
  ];

  get variants(): TableVariant[] {
    return this.variantsList;
  }
}
