import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {


  @Output()
  public onValue = new EventEmitter<string>(); 

  @Input()
  public placeholder: string = '';  

  @Input()
  public initialValue: string = '';

  emitValue(value: string):void{
    this.onValue.emit( value );
  }

}
