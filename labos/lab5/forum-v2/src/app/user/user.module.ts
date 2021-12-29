import { UserProfileComponent } from './user-profile/user-profile.component';
import { PostItemComponent } from './../post/post-item/post-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPostsPipe } from './user-posts.pipe';

@NgModule({
  declarations: [UserPostsPipe, PostItemComponent, UserProfileComponent],
  imports: [CommonModule],
})
export class UserModule {}
