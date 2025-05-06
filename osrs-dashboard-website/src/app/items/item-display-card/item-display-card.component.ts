import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-display-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-display-card.component.html',
  styleUrl: './item-display-card.component.scss'
})
export class ItemDisplayCardComponent {
  image: string = '';
  @Input() itemInfoData: any;

  constructor() {}

  ngOnInit() {
  }
}
