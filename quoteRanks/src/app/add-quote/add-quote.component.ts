import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  @Input() myQuote;
  @Output() onSubmitEvent = new EventEmitter();

  newQuote = {
    text: '',
    author: '',
    vote: 0
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData) {
    console.log(formData)
    console.log(this.newQuote);
    this.onSubmitEvent.emit(this.newQuote);
    this.newQuote = {text: '', author: '', vote: 0};
  }


}
