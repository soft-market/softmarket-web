export type Author = {
  nickname: string;
  email: string;
};

export type Item = {
  id: number;
  author: Author;
  title: string;
  image: string;
  created: Date;
  modified?: Date;
  content: string;
};
