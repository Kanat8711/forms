import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckStringNumberPipe } from './check-string-number.pipe';



@NgModule({
  declarations: [
    CheckStringNumberPipe
  ],
  exports: [
    CheckStringNumberPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
