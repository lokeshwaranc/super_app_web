import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() label: string = 'Toggle';
  @Input() id: string = '';
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  // @Input() label: string = 'Toggle';
  @Output() handleToggle = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onChange(event:any){
    this.checked = event;
    this.handleToggle.emit(this.checked);
    console.log("🚀 ~ file: toggle.component.ts:21 ~ ToggleComponent ~ onChange ~ event:", event)
  }
}
