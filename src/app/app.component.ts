import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  keyword = '123';
  title = 'ng-cathay-220111';

  doSearch(value: string) {
    console.log('Search: ', value);
    this.keyword = value;
  }
}
