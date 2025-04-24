import { Component, Input } from '@angular/core';
import { ItemInfoData } from '../models/item-info-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-card.component.html',
  styleUrl: './display-card.component.scss'
})
export class DisplayCardComponent {
  image: string = '';
  @Input() itemInfoData: any;

  constructor() {}

  ngOnInit() {
  }
}
