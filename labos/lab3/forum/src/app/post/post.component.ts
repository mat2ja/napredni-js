import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PostModel } from '../posts/posts.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: PostModel | null = null;
  @Input() editMode: boolean = false;
  @Output() deletedPost = new EventEmitter();
  @Output() editedPost = new EventEmitter();

  editedComment: string = '';

  constructor() {}

  setEditMode(bool: boolean) {
    this.editMode = bool;
  }

  deletePost(post: PostModel) {
    this.deletedPost.emit(post);
  }

  editPost(postTs: Date) {
    this.editedPost.emit({
      postTs,
      editedComment: this.editedComment,
    });
  }

  ngOnInit(): void {
    if (this.post?.comment) {
      this.editedComment = this.post.comment;
    }
  }
}
