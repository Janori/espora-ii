import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideitemComponent} from './item/sideitem.component';
import {SidemenuComponent} from './menu/sidemenu.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdButtonModule,
    BrowserAnimationsModule
  ],
  declarations: [SidemenuComponent, SideitemComponent],
  exports: [SidemenuComponent, SideitemComponent]
})
export class SidemenuModule {
}
