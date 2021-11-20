import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [AppComponent, PostsComponent, PostComponent, NewPostComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// https://angular-forum.vercel.app/
