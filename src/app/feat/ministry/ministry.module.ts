import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinistryListComponent } from './ministry-list/ministry-list.component';



@NgModule({
  declarations: [
    MinistryListComponent
  ],
  exports: [ 
    MinistryListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MinistryModule { }
