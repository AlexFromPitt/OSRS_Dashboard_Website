import { Component } from '@angular/core';
import { FilterSectionComponent } from '../filter-section/filter-section.component';
import { DisplaySectionComponent } from '../display-section/display-section.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FilterSectionComponent, DisplaySectionComponent, CommonModule, ButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: `./dashboard.component.scss`
})
export class DashboardComponent {

  isButtonClicked: boolean = false;

  constructor() {}

  onFilterButtonClicked(isClicked: boolean) {
    this.isButtonClicked = isClicked;
  }

  getDisplaySectionStyle() {
    return {
      width: this.isButtonClicked ? '90%' : '95%'
    };
  }

  getFilterSectionStyle() {
    return {
      width: this.isButtonClicked ? '10%' : '5%'
    };
  }
}
