import { Component } from '@angular/core';
import { DisplayCardComponent } from "../display-card/display-card.component";

@Component({
  selector: 'app-display-section',
  standalone: true,
  imports: [DisplayCardComponent],
  templateUrl: './display-section.component.html',
  styleUrl: './display-section.component.scss'
})
export class DisplaySectionComponent {

}
