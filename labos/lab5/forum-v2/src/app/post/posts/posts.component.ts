import { PostBase } from './../post.model';
import { BehaviorSubject, Subscription } from 'rxjs';
import { PostService } from './../post.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  postsSubject: BehaviorSubject<Post[]>;
  subscription: Subscription;

  addPost(post: PostBase) {
    this.postService.addPost(post);
  }

  deletePost(id: string) {
    this.postService.deletePost(id);
  }

  editPost(post: Post) {
    this.postService.editPost(post);
  }

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postsSubject = this.postService.getPosts();
    this.subscription = this.postsSubject.subscribe((res) => {
      this.posts = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
