import { AuthService } from './../../auth/auth.service';
import { Subscription } from 'rxjs';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit, OnDestroy {
  @Input() post: Post;
  @Input() hasControls: boolean = false;
  @Input() editMode: boolean = false;

  @Output() deletedPost = new EventEmitter();
  @Output() editedPost = new EventEmitter();

  editedComment: string = '';
  username: string;
  isCurrentUser = false;

  authChangeSubscription: Subscription;
  usersSubscription: Subscription;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.editedComment = this.post.comment;

    this.setCurrentUser();
    this.setUsername();

    this.authChangeSubscription = this.auth.authChange.subscribe((res) => {
      this.setCurrentUser();
    });
    this.usersSubscription = this.auth.getUsers().subscribe((res) => {
      this.setUsername();
    });
  }

  setCurrentUser() {
    this.isCurrentUser = this.auth.isCurrentUser(this.post.userId);
  }

  setUsername() {
    this.username = this.auth.getUserById(this.post.userId)?.username || '';
  }

  setEditMode(bool: boolean) {
    this.editMode = bool;
    if (this.editMode) {
      this.editedComment = this.post.comment;
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

  ngOnDestroy(): void {
    this.authChangeSubscription.unsubscribe();
    this.usersSubscription.unsubscribe();
  }
}
