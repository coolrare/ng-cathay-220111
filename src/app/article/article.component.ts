import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Article } from './shared/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item: Article = <Article>{};

  @Output() delete = new EventEmitter<number>();

  constructor() { }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      // changes['item'].currentValue
    }
  }

  ngOnInit(): void {
  }



  btnDelete() {
    this.delete.emit(this.item.id);
  }

}


