import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  data: any;
  title: string;
  constructor(private newsService: NewsService) {
   }

  ngOnInit(){
    //check for type of category & set the api url accordingly
    if(this.newsService.getCategory().match('business'))
    {
     this.newsService
        .getData('top-headlines?country=in&category=business')
          .subscribe(data => {
            console.log(data);
            this.data = data;
          });
      
    }
    else if(this.newsService.getCategory().match('entertainment'))
    {
     this.newsService
        .getData('top-headlines?country=in&category=entertainment')
          .subscribe(data => {
            console.log(data);
            this.data = data;
          });
    }
    else if(this.newsService.getCategory().match('health'))
    {
     this.newsService
        .getData('top-headlines?country=in&category=health')
          .subscribe(data => {
            console.log(data);
            this.data = data;
          });
    }
    else if(this.newsService.getCategory().match('science'))
    {
     this.newsService
        .getData('top-headlines?country=in&category=science')
          .subscribe(data => {
            console.log(data);
            this.data = data;
          });
    }
    else if(this.newsService.getCategory().match('sports'))
    {
     this.newsService
        .getData('top-headlines?country=in&category=sports')
          .subscribe(data => {
            console.log(data);
            this.data = data;
          });
    }
    else if(this.newsService.getCategory().match('technology'))
    {
     this.newsService
        .getData('top-headlines?country=in&category=technology')
          .subscribe(data => {
            console.log(data);
            this.data = data;
          });
    }
    else {
      console.log("Default news");
      this.newsService
        .getData('top-headlines?country=in')
          .subscribe(data => {
            console.log(data);
            this.data = data;
          });
    }   
  }

  //Opens browser to visit link
  visitLink(article){
   console.log(article.url); 
   window.open(article.url, "_blank");
  }
}

