import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonComponent } from './button/button.component';
import { RadioComponent } from './radio/radio.component';
import { ToggleComponent } from './toggle/toggle.component';
import { SelectComponent } from './select/select.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  declarations: [
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
    RadioComponent,
    ToggleComponent,
    SelectComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports:[
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
    RadioComponent,
    ToggleComponent,
    SelectComponent,
    SnackbarComponent,
  ]
})
export class ReusableComponentsModule { }
