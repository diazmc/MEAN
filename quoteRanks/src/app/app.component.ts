import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [{
    text: 'Hello',
    author: 'MC',
    vote: 0
  }];

  createQuote(quote) {
    this.quotes.push(quote)
  }

  deleteQuote(quote){
    const idx = this.quotes.indexOf(quote);
    this.quotes.splice(idx, 1)
  }

}
