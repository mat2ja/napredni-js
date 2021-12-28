export interface PostBase {
  user: string;
  timestamp: Date;
  comment: string;
}

export interface Post extends PostBase {
  id: string;
}
