import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemInfoData } from '../../models/item-info-data.model';

@Component({
  selector: 'app-item-display-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-display-card.component.html',
  styleUrl: './item-display-card.component.scss'
})
export class ItemDisplayCardComponent {
  image: string = '';
  itemInfoData = input<ItemInfoData>();

  constructor() {}

  ngOnInit() {
  }
}
