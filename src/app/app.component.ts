import { Component } from '@angular/core';
interface dataItems {
  id: number;
  label: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-select-assessment';
  placeHolder = 'Select an option';
  selectedValue:any;
  selectionData : dataItems[] = [
    {
      id: 1,
      label: 'Option 1'
    },
    {
      id: 2,
      label: 'Option 2'
    },
    {
      id: 3,
      label: 'Option 3'
    },
    {
      id: 4,
      label: 'Option 4'
    },
    {
      id: 5,
      label: 'Option 5'
    },
    {
      id: 6,
      label: 'Option 6'
    },
    {
      id: 7,
      label: 'Option 7'
    },
    {
      id: 8,
      label: 'Option 8'
    },
    {
      id: 9,
      label: 'Option 9'
    },
  ]
}
