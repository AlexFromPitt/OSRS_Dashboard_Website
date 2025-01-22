import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-section',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.scss'
})
export class FilterSectionComponent {
  filterItems: boolean = false;
  filterMonsters: boolean = false;
  filterPlayers: boolean = false;
  showFilter: boolean = false;
  @Output() buttonClicked = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
    this.setDefault();
    this.showFilter = false;

    console.log(this.showFilter)
  }

  setDefault() {
    this.filterItems = false;
    this.filterMonsters = false;
    this.filterPlayers = false;
  }

  onFilterButtonClick() {
    this.showFilter = !this.showFilter;
    this.buttonClicked.emit(this.showFilter);
  }
}
