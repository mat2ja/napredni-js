import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [NavbarComponent, HighlightDirective],
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
    exports: [NavbarComponent, CommonModule, HighlightDirective]
})
export class SharedModule { }
