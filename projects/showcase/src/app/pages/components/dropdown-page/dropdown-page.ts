import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeonDropdown, DropdownItem } from 'suneon';

@Component({
  selector: 'app-dropdown-page',
  standalone: true,
  imports: [CommonModule, NeonDropdown],
  templateUrl: './dropdown-page.html',
  styleUrl: './dropdown-page.css'
})
export class DropdownPage {
  basicItems: DropdownItem[] = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 }
  ];

  iconItems: DropdownItem[] = [
    { label: 'Profile', value: 'profile', icon: '👤' },
    { label: 'Settings', value: 'settings', icon: '⚙️' },
    { label: 'Messages', value: 'messages', icon: '💬' },
    { label: 'Logout', value: 'logout', icon: '🚪' }
  ];

  actionItems: DropdownItem[] = [
    { label: 'Edit', value: 'edit', icon: '✏️' },
    { label: 'Duplicate', value: 'duplicate', icon: '📋' },
    { label: 'Archive', value: 'archive', icon: '📁' },
    { label: '', value: '', divider: true },
    { label: 'Delete', value: 'delete', icon: '🗑️' }
  ];

  disabledItems: DropdownItem[] = [
    { label: 'Available', value: 'available' },
    { label: 'Unavailable', value: 'unavailable', disabled: true },
    { label: 'Coming Soon', value: 'coming', disabled: true },
    { label: 'Active', value: 'active' }
  ];

  selectedBasic: any = null;
  selectedIcon: any = null;
  selectedVariant: any = null;

  onSelectionChange(item: DropdownItem) {
    console.log('Selected:', item);
  }
}
