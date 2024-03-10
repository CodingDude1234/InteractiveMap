import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})

export class MapComponent {

  @Output() customEvent = new EventEmitter<void>();

  idAttribute: String = 'Default';

  // Get data from country on the svg map when clicked
  handleClick(event: any): void {
    const clickedElement = event.target as HTMLElement;
  
    this.idAttribute = clickedElement.getAttribute('id')|| 'Default';
    this.customEvent.emit();
  }
}