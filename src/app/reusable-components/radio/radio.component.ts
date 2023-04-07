import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  @Input() name: string = '';
  @Input() radioStyle: string = '';
  @Input() id: string = '';
  @Input() lableStyle: string = '';
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() options: any = [];
  @Input() value: string = '';
  @Input() labelStyle: string = '';
  @Input() radioLabelStyle: string = '';

  @Output() handleChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onChange(event: any){
    this.value = event.target.value
    console.log("🚀 ~ file: radio.component.ts:23 ~ RadioComponent ~ onChange ~ event:", event)
    this.handleChange.emit(this.value);
  }
}
