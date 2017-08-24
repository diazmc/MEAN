import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app works!';

  num: number = 1.23;
  today = new Date();
  loggedIn = true;
  myBoolean = true;
  myArray = [1,2,3,4,5];
  color = 'red';
  switch: boolean = true;

  user = { email:'' };
  users = [];
  onSubmit(){
    this.users.push(this.user);
    this.user = { email:'' };    
  }

}
