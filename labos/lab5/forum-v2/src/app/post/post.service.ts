import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import Post from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = [
    {
      user: 'matija',
      timestamp: new Date('2021-11-19 22:30:21'),
      comment: 'idemo delati',
    },
    {
      user: 'marian',
      timestamp: new Date('2021-11-17 02:28:14'),
      comment: 'prvi!!!!11',
    },
  ];
  postsSubject: BehaviorSubject<Post[]>;

  constructor() {
    this.init();
  }

  init() {
    this.postsSubject = new BehaviorSubject(this.posts);
  }

  getPosts() {
    return this.postsSubject;
  }

  addPost(post: Post) {
    // obavi logiku na lokalnom arrayu
    this.posts = [post, ...this.posts];
    // dojavi tu promjenu na postSubjectu (tko god je subscriban na to)
    this.postsSubject.next(this.posts);
  }

  editPost({ postTs, editedComment }: { postTs: Date; editedComment: string }) {
    const post = this.getPostByTimestamp(postTs);
    if (post) {
      post.comment = editedComment;
    }
    this.postsSubject.next(this.posts);
  }

  deletePost(postTs: Date) {
    this.posts = this.posts.filter(({ timestamp }) => timestamp !== postTs);
    this.postsSubject.next(this.posts);
  }

  getPostByTimestamp(postTs: Date) {
    return this.posts.find(({ timestamp }) => timestamp === postTs);
  }
}
