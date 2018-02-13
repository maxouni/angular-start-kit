import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    RouterModule,
    FooterComponent,
    HeaderComponent
  ],
  declarations: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
