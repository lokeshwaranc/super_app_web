import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() name: string = '';
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() id: string = '';
  @Input() labelStyle: string = '';
  @Input() checkedStyle: string = '';
  @Output() handleChange = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }
  onChange(event:any){
    this.checked = event;
    this.handleChange.emit(event);
  }
}
