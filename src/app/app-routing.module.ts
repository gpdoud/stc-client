import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinistryListComponent } from './feat/ministry/ministry-list/ministry-list.component';
import { MinistryModule } from './feat/ministry/ministry.module';

const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "ministry/list", component: MinistryListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MinistryModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
