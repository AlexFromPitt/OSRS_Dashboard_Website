import { Component } from '@angular/core';

@Component({
  selector: 'app-display-card',
  standalone: true,
  imports: [],
  templateUrl: './display-card.component.html',
  styleUrl: './display-card.component.scss'
})
export class DisplayCardComponent {
  image: string = '';

  constructor() {}

  ngOnInit() {
    this.image = 'assets/dds.png'
  }
}
