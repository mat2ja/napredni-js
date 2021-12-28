import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  @Input() post: Post | null = null;
  @Input() editMode: boolean = false;

  @Output() deletedPost = new EventEmitter();
  @Output() editedPost = new EventEmitter();

  editedComment: string = '';

  constructor() {}

  setEditMode(bool: boolean) {
    this.editMode = bool;
    if (this.editMode && this.post?.comment) {
      this.editedComment = this.post?.comment;
    }
  }

  deletePost(id: string) {
    this.deletedPost.emit(id);
  }

  editPost(post: Post) {
    this.post = { ...post, comment: this.editedComment };
    this.editedPost.emit(this.post);
    this.editMode = false;
  }

  cancelEdit() {
    this.editMode = false;
  }

  formatTimestamp(ts: Date) {
    return new Date(ts).toLocaleString('de');
  }

  ngOnInit(): void {
    if (this.post?.comment) {
      this.editedComment = this.post.comment;
    }
  }
}
