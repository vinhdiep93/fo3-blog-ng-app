import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Post, Category } from '../shared/models/post.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  private posts : Post[];
  private category: Category;
  constructor(private categoryService: CategoryService, private route: ActivatedRoute) {
    this.category = new Category();
    this.route.params.subscribe(params =>{
      this.getPosts(params['id']);
      this.getCategory(params['id']);
    });
   }

  ngOnInit() {
  }

  getPosts(categoryId){
    this.categoryService.query(categoryId).subscribe(data=>{
      this.posts = data;
    });
  }
  getCategory(id){
    this.categoryService.get(id).subscribe(data=> this.category = data);
  }

}
