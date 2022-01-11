import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from './shared/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() item: Article = <Article>{};

  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  btnDelete() {
    this.delete.emit(this.item.id);
  }

}


