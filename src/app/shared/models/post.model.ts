import { Data } from "@angular/router/src/config";

export class Post {
  PostId: number;
  Title: string;
  Summary: string;
  Content: string;
  ImageUrl: string;
  Pseudonym: string;
  Category: number;
  CreatedDate: Data;
  CreatedBy: number;
  IsActive: boolean;
}

export class Paging{
  count: number;
}
