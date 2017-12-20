import { Data } from "@angular/router/src/config";

export class Post {
  PostId: number;
  Title: string;
  Summary: string;
  Content: string;
  ImageUrl: string;
  Pseudonym: string;
  CategoryId: number;
  CreatedDate: Date;
  CreatedBy: number;
  IsActive: boolean;
  id: number;
}

export class Paging{
  count: number;
}

export class Category{
  CategoryId: number;
  Name: string;
  Description: string;
  CreatedDate: Date;
  CreatedBy: number;
  id: number;
}

export class PostView {
  PostId: number;
  Title: string;
  Summary: string;
  Content: string;
  ImageUrl: string;
  Pseudonym: string;
  Category: Category;
  CreatedDate: Date;
  CreatedBy: number;
  IsActive: boolean;
  id: number;
}
