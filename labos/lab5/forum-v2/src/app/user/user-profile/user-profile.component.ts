import { User } from './../../auth/auth.model';
import { Subscription, BehaviorSubject } from 'rxjs';
import { AuthService } from './../../auth/auth.service';
import { PostService } from './../../post/post.service';
import { Post } from './../../post/post.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  user: User;
  userPosts: Post[];
  postsSubject: BehaviorSubject<Post[]>;
  postsSubscription: Subscription;

  constructor(private postService: PostService, private auth: AuthService) {}

  ngOnInit(): void {
    this.user = this.auth.getUser() as User;
    this.postsSubject = this.postService.getPosts();
    this.postsSubscription = this.postsSubject.subscribe((posts) => {
      this.userPosts = this.filterPosts(posts);
    });
  }

  filterPosts(posts: Post[]) {
    return posts.filter((post) => post.userId === this.user?.id);
  }

  deletePost(id: string) {
    this.postService.deletePost(id);
  }

  editPost(post: Post) {
    this.postService.editPost(post);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
