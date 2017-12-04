import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { ApiService } from './shared/services/api.service';
import { PostService } from './shared/services/post.service';
import { PostDetailComponent } from './post/post-detail.component';
import  {CommentComponent} from './post/comment.component';
import { SharedModule } from './shared/shared.module';

import { CommentService } from './shared/services/comment.service';
import { JwtService } from './shared/services/jwt.service';
import { PostModule } from './post/post.module';
import { HomeModule } from './home/home.module';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    rootRouting,
    HomeModule,
    HttpClientModule,
    PostModule,
    SharedModule,
    FormsModule
  ],
  providers: [ApiService,PostService,JwtService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
