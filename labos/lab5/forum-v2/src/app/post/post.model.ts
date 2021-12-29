export interface PostBase {
  userId: string;
  timestamp: Date;
  comment: string;
}

export interface Post extends PostBase {
  id: string;
}
