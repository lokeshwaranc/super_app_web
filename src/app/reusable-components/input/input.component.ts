import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() name: string;
  @Input() type: string = 'text';
  @Input() value: string = '';
  @Input() inputStyle: string = '';
  @Input() formStyle: string = '';
  @Input() labelStyle: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() id: string = '';
  @Input() autocomplete: string = 'off';
  @Input() required: boolean = false;
  @Input() prepend: boolean = false;
  @Input() prependText: string = ''
  @Input() append: boolean = false
  @Input() appendText: string = ''
  @Output() handleChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onChange(event:any){
    this.value = event;
    this.handleChange.emit(event);
  }
}
