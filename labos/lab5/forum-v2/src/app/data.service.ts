import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Post from './post/post.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dbUrl = 'https://npjs9-forum-default-rtdb.europe-west1.firebasedatabase.app';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(`${this.dbUrl}/posts.json`);
  }

  addPost(post: Post) {
    return this.http.post(`${this.dbUrl}/posts.json`, post);
  }

  deletePost(id: string) {
    return this.http.delete(`${this.dbUrl}/posts/${id}.json`);
  }

  editPost(post: Post) {
    return this.http.patch(`${this.dbUrl}/posts/${post.id}.json`, post);
  }
}
