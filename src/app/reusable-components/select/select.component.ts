import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() options: any = [];
  @Input() label: string = "Select";
  @Input() value: string = "";
  @Input() id: string = "";
  @Input() name: string = "";
  @Output() handleSelect = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onChange(event: any){
    console.log("🚀 ~ file: select.component.ts:20 ~ SelectComponent ~ onChange ~ event:", event.target.value)
    this.value = event.target.value;
    this.handleSelect.emit(this.value);
  }
}
