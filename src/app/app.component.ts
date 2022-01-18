import { Article } from './article/shared/Article';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  keyword = '123';
  title = 'ng-cathay-220111';

  data$: Observable<Article[]> = of([]);

  constructor(private datasvc: DataService) {}

  ngOnInit(): void {
    this.data$ = this.datasvc.loadArticle();
  }

  doSearch(value: string) {
    console.log('Search: ', value);
    this.keyword = value;
  }

  doDelete(articleId: number) {
    console.log("Deleting ", articleId);
  }
}
