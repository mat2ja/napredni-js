import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostNewComponent } from './post-new/post-new.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostsComponent, PostItemComponent, PostNewComponent],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class PostModule {}
