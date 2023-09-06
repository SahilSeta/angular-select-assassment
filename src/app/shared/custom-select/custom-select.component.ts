import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomSelectComponent implements OnInit, OnChanges {
  @Input() placeHolder?: string = '';
  @Input() data: any = [];
  @Output() selectionChanged = new EventEmitter<any>();
  showDropDown:boolean = false;
  selectedValue :string = '';
  constructor(){}
  ngOnInit(): void {
  }
  toggle(){
    this.showDropDown = !this.showDropDown
  }
  ngOnChanges(changes: SimpleChanges){
  }
  setValue(element:any){
    this.selectedValue = element.label;
    this.selectionChanged.emit(element);
  }
}
