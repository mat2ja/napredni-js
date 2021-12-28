import { BehaviorSubject, Subscription } from 'rxjs';
import { PostService } from './../post.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import Post from '../post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  postsSubject: BehaviorSubject<Post[]>;
  subscription: Subscription;

  addPost(post: Post) {
    this.postService.addPost(post);
  }

  deletePost(postTs: Date) {
    this.postService.deletePost(postTs);
  }

  editPost(payload: { postTs: Date; editedComment: string }) {
    this.postService.editPost(payload);
  }

  constructor(private postService: PostService) {}

  ngOnInit() {
    // observable
    this.postsSubject = this.postService.getPosts();
    // kada se postSubject promijeni, updajtaj i posts (prati promjene)
    this.subscription = this.postsSubject.subscribe((res) => {
      this.posts = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
