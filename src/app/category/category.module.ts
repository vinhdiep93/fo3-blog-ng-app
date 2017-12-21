import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { CategoryComponent } from './category.component';
import { RouterModule } from '@angular/router';
import { PostListComponent } from '../shared/post-helpers/post-list.component';
import { SharedModule } from '../shared/shared.module';

const categoryRouting : ModuleWithProviders = RouterModule.forChild([{
  path: "category/:id",
  component: CategoryComponent
}]);


@NgModule({
  imports: [
    CommonModule,
    categoryRouting,
    SharedModule
  ],
  declarations: [CategoryComponent]
})
export class PostCategoryModule { }
