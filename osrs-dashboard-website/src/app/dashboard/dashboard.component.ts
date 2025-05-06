import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
