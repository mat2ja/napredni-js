import { DataService } from './../data.service';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Post, PostBase } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = [];
  postsSubject: BehaviorSubject<Post[]> = new BehaviorSubject([] as Post[]);

  constructor(private dataService: DataService) {
    this.init();
  }

  init() {
    this.dataService.getPosts().subscribe((res: any) => {
      this.posts = res;
      this.postsSubject.next(this.posts);
    });
  }

  getPosts() {
    return this.postsSubject;
  }

  addPost(post: PostBase) {
    this.dataService.addPost(post).subscribe((res: any) => {
      const { id } = res;
      const newPost = { id, ...post };

      this.posts = [newPost, ...this.posts];
      this.postsSubject.next(this.posts);
    });
  }

  editPost(newPost: Post) {
    this.dataService.editPost(newPost).subscribe((res) => {
      const oldPostIdx = this.getPostIndexById(newPost.id);
      if (oldPostIdx !== -1) {
        this.posts[oldPostIdx] = newPost;
        this.postsSubject.next(this.posts);
      }
    });
  }

  deletePost(id: string) {
    this.dataService.deletePost(id).subscribe((res) => {
      this.posts = this.posts.filter((post) => post.id !== id);
      this.postsSubject.next(this.posts);
    });
  }

  getPostById(id: string) {
    return this.posts.find((post) => post.id === id);
  }

  getPostIndexById(id: string) {
    return this.posts.findIndex((post) => post.id === id);
  }
}
