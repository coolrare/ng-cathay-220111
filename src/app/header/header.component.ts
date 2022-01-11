import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';
  counter = 0;

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.sitename = 'The Will Will Web';
    // }, 2000);
  }

  changeName(event: MouseEvent) {
    this.counter++;
    console.log(event);
    if (event.ctrlKey) {
      this.sitename = 'The Will Will Web';
    }
  }

}
