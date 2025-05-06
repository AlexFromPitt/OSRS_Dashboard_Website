import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../services/item.service';
import { ItemInfoData } from '../models/item-info-data.model';
import { ItemDisplayCardComponent } from './item-display-card/item-display-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, ItemDisplayCardComponent, FormsModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  itemInfoList: ItemInfoData[] | null = null;
  searchTerm: string = '';

  constructor(private itemService: ItemService) { }

  onItemSearch(): void {
    this.itemService.getItemInfoData(this.searchTerm).subscribe({
      next: (response: ItemInfoData[]) => {
        this.itemInfoList = response;
      },
      error: () => {
        console.log("Could not find item data for " + this.searchTerm);
      }
    });
  }
}
