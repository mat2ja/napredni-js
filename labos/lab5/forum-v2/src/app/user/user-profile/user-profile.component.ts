import { Subscription, BehaviorSubject } from 'rxjs';
import { AuthService } from './../../auth/auth.service';
import { PostService } from './../../post/post.service';
import { Post } from './../../post/post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  posts: Post[];
  postsSubject: BehaviorSubject<Post[]>;
  postsSubscription: Subscription;

  constructor(private postService: PostService, private auth: AuthService) {}

  ngOnInit(): void {
    this.postsSubject = this.postService.getPosts();
    this.postsSubscription = this.postsSubject.subscribe((res) => {
      this.posts = res;
    });
  }

  deletePost(id: string) {
    this.postService.deletePost(id);
  }

  editPost(post: Post) {
    this.postService.editPost(post);
  }
}
