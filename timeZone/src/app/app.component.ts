import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = [];

  PST(){
    this.date.pop();
    this.date.push(new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
    return this.date
  }
  MST(){
    this.date.pop();
    this.date.push(new Date().toLocaleString('en-US', { timeZone: 'America/Denver' }));
    return this.date
  }
  CST(){
    this.date.pop();
    this.date.push(new Date().toLocaleString('en-US', { timeZone: 'America/Regina' }));
    return this.date
  }
  EST(){
    this.date.pop();
    this.date.push(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
    return this.date
  }
  clear(){
    this.date.pop();
  }


}
