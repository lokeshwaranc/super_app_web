import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: string = 'button';
  @Input() buttonStyle: string = 'btn-primary';
  @Input() buttonText: string = 'Submit';
  @Input() id: string = '';
  @Output() handleClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any) {
    console.log("🚀 ~ file: button.component.ts:21 ~ ButtonComponent ~ handleClick ~ event:", event)
    this.handleClick.emit(event);
  }
}
