import { Component, OnInit } from '@angular/core';

export interface PostModel {
  user: string;
  timestamp: Date;
  comment: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor() {}

  posts: PostModel[] = [
    {
      user: 'matija',
      timestamp: new Date('2021-05-10'),
      comment: 'prvi komentar',
    },
    {
      user: 'matija',
      timestamp: new Date('2021-05-10'),
      comment: 'drugi komentar',
    },
  ];

  addPost(post: PostModel) {
    this.posts.unshift(post);
  }

  deletePost(deleted: PostModel) {
    this.posts = this.posts.filter(
      (post) => post.timestamp !== deleted.timestamp
    );
  }

  editPost({ postTs, editedComment }: { postTs: Date; editedComment: string }) {
    const post = this.posts.find((post) => post.timestamp === postTs);
    if (post) {
      post.comment = editedComment;
    }
  }

  ngOnInit(): void {}
}
