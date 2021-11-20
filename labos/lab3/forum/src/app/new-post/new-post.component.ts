import { Post } from './../posts/posts.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
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

  addPost(e: Event) {
    e.preventDefault();
    if (this.user.length && this.comment.length) {
      const newPost: Post = {
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
