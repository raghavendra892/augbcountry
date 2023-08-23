import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuComponent } from './shared/components/au/au.component';
import { GbComponent } from './shared/components/gb/gb.component';
import { UsComponent } from './shared/components/us/us.component';
import { RaComponent } from './shared/components/ra/ra.component';
import { NavComponent } from './shared/components/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    AuComponent,
    GbComponent,
    UsComponent,
    RaComponent,
    NavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
