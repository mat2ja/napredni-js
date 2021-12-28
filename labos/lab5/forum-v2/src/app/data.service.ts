import { UserBase } from './auth/auth.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, PostBase } from './post/post.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dbUrl = 'https://npjs9-forum-default-rtdb.europe-west1.firebasedatabase.app';
  table = {
    users: 'users',
    posts: 'posts',
  };

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(`${this.dbUrl}/posts.json`).pipe(
      map((res: any) => {
        const posts = Object.keys(res).reduce(
          (acc: any[], id: string) => [...acc, { id, ...res[id] }],
          []
        );
        return posts;
      })
    );
  }

  addPost(post: PostBase) {
    return this.http
      .post(`${this.dbUrl}/${this.table.posts}.json`, post)
      .pipe(map((res: any) => ({ id: res.name })));
  }

  deletePost(id: string) {
    return this.http.delete(`${this.dbUrl}/${this.table.posts}/${id}.json`);
  }

  editPost(post: Post) {
    const { timestamp, user, comment } = post;
    const postBase = { timestamp, user, comment };
    return this.http.patch(
      `${this.dbUrl}/${this.table.posts}/${post.id}.json`,
      postBase
    );
  }

  getUsers() {
    return this.http.get(`${this.dbUrl}/${this.table.users}.json`).pipe(
      map((res: any) => {
        const users = Object.keys(res).reduce(
          (acc: any[], id: string) => [...acc, { id, ...res[id] }],
          []
        );
        console.log('users :>> ', users);
        return users;
      })
    );
  }

  getUser(id: string) {
    return this.http.get(`${this.dbUrl}/${this.table.users}/${id}.json`);
  }

  addUser(user: UserBase) {
    return this.http
      .post(`${this.dbUrl}/${this.table.users}.json`, user)
      .pipe(map((res: any) => ({ id: res.name })));
  }
}
