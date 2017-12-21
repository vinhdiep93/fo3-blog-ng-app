export class PostListConfig {
    type = 'all';
    category?:number;
    isHot?:boolean;
    filters: {
      // tag?: string,
      // author?: string,
      // favorited?: string,
      limit?: number,
      //offset?: number
      skip?: number
    } = {};
  }
