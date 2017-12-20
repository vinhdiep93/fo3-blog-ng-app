export class PostListConfig {
    type = 'all';
    category?:number;
    filters: {
      // tag?: string,
      // author?: string,
      // favorited?: string,
      limit?: number,
      //offset?: number
      skip?: number
    } = {};
  }
