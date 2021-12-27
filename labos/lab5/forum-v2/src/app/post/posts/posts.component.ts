import { Component, OnInit } from '@angular/core';
import Post from '../post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor() {}

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

  addPost(post: Post) {
    this.posts.unshift(post);
  }

  deletePost(postTs: Date) {
    this.posts = this.posts.filter((post) => post.timestamp !== postTs);
  }

  editPost({ postTs, editedComment }: { postTs: Date; editedComment: string }) {
    const post = this.posts.find((post) => post.timestamp === postTs);
    if (post) {
      post.comment = editedComment;
    }
  }

  addPostNew(post: Post) {
    this.posts.unshift(post);
  }

  ngOnInit(): void {}
}
