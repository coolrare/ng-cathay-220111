import { Article } from './article/shared/Article';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  keyword = '123';
  title = 'ng-cathay-220111';

  data: Article[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<Article[]>('/api/articles.json').subscribe(items => {
      this.data = items;
    })
  }

  doSearch(value: string) {
    console.log('Search: ', value);
    this.keyword = value;
  }

  doDelete(articleId: number) {
    console.log("Deleting ", articleId);
  }
}
