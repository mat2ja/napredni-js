import { User } from './../../auth/auth.model';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostBase } from '../post.model';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss'],
})
export class PostNewComponent implements OnInit {
  user: User | null;
  comment: string = '';
  formShown: boolean = false;
  error: string = '';

  @Output() addedPost = new EventEmitter();

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.user = this.auth.getUser();
  }

  clearForm(): void {
    this.comment = '';
    this.formShown = false;
  }

  submitPost(e: Event) {
    e.preventDefault();
    if (this.user && this.comment.length) {
      const newPost: PostBase = {
        userId: this.user.id,
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
