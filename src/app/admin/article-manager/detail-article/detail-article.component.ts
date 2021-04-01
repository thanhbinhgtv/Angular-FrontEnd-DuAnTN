import { Component, OnInit } from '@angular/core';
import {FormControl,  FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ArticleManagerService } from '../article-manager.service';
import { ArticleResponseModel } from '../view-article/article-response-model';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  articleForm: FormGroup;
  articleId: number;
  article: ArticleResponseModel;

  
  constructor(private ArticleService: ArticleManagerService, private activateRoute: ActivatedRoute) {
    this.articleId = this.activateRoute.snapshot.params.id;
   }

   ngOnInit(): void {
    this.getStaffById();

    this.articleForm = new FormGroup({
      articleId: new FormControl({value:"", disabled:true}),
      title: new FormControl({value:"", disabled:true}),
      content: new FormControl({value:"", disabled:true}),
      customerId: new FormControl({value:"", disabled:true}),
      description: new FormControl({value:"", disabled:true}),
      
    });
  }

  getStaffById(){
    this.ArticleService.getAllArticleById(this.articleId).subscribe((data) => {
        this.articleForm.patchValue(data);
        this.article = data;
    })
  }

}