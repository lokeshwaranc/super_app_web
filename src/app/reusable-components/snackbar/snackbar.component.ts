import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  @Input() message: string = '';
  showSnackbar: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  showMessage(message: string): void {
    this.message = message;
    this.showSnackbar = true;

    setTimeout(() => {
      this.showSnackbar = false;
    }, 3000);
  }
}
