import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuComponent } from './shared/components/au/au.component';
import { GbComponent } from './shared/components/gb/gb.component';
import { UsComponent } from './shared/components/us/us.component';
import { RaComponent } from './shared/components/ra/ra.component';

const routes: Routes = [
  {path:'au',component:AuComponent},
  {path:'gb',component:GbComponent},
  {path:'us',component:UsComponent},
  {path:'ra',component:RaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
