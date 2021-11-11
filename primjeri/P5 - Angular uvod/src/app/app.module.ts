import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestnaComponent } from './testna/testna.component';
import {FormsModule} from "@angular/forms";
import { Testna2Component } from './testna2/testna2.component';
import { Testna3Component } from './testna3/testna3.component';
import { Testna4Component } from './testna4/testna4.component';
import { Testna5Component } from './testna5/testna5.component';
import { Testna6Component } from './testna6/testna6.component';
import { ChildComponent } from './child/child.component';
import { Testna7Component } from './testna7/testna7.component';
import { Testna8Component } from './testna8/testna8.component';
import { ForumComponent } from './forum/forum.component';
import { TodoComponent } from './todo/todo.component';
import { Todo2Component } from './todo2/todo2.component';


@NgModule({
  declarations: [
    AppComponent,
    TestnaComponent,
    Testna2Component,
    Testna3Component,
    Testna4Component,
    Testna5Component,
    Testna6Component,
    ChildComponent,
    Testna7Component,
    Testna8Component,
    ForumComponent,
    TodoComponent,
    Todo2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
