import { Component } from '@angular/core';
import { DisplayCardComponent } from "../display-card/display-card.component";
import { ItemService } from '../services/item.service';
import { ItemInfoData } from '../models/item-info-data.model';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-display-section',
  standalone: true,
  imports: [DisplayCardComponent, FormsModule, HttpClientModule],
  templateUrl: './display-section.component.html',
  styleUrl: './display-section.component.scss'
})
export class DisplaySectionComponent {
  searchTerm: string = '';
  itemInfo: ItemInfoData | null = null;

  constructor(private itemService: ItemService) { }

  loadItemIds(): void {
    this.itemService.loadItemIds().subscribe({
      next: (response: string) => {
        console.log('Response from backend:', response);
      },
      error: (error) => {
        console.error('Error loading item IDs:', error);
      }
    });
  }

  onItemSearch(): void {
    this.itemService.getItemInfoData(this.searchTerm).subscribe({
      next: (response: ItemInfoData) => {
        console.log(`${response.name} - ${response.id} - ${response.description}`);
        this.itemInfo = response;
      },
      error: () => {
        console.log("Could not find item data for " + this.searchTerm);
      }
    });
  }
}
