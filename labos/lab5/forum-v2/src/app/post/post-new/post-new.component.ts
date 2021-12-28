import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post, PostBase } from '../post.model';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss'],
})
export class PostNewComponent implements OnInit {
  user: string = '';
  comment: string = '';
  formShown: boolean = false;
  error: string = '';

  @Output() addedPost = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clearForm(): void {
    this.user = '';
    this.comment = '';
    this.formShown = false;
  }

  submitPost(e: Event) {
    e.preventDefault();
    if (this.user.length && this.comment.length) {
      const newPost: PostBase = {
        user: this.user,
        comment: this.comment,
        timestamp: new Date(),
      };
      this.addedPost.emit(newPost);
      this.clearForm();
      this.error = '';
    } else {
      this.error = 'Please fill out both fields';
    }
  }
}
