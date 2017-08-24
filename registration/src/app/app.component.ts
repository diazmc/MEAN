import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message = [];


  user = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    con_password: '',
    street: '',
    unit: '',
    city: '',
    state: '',
    luck: ''
  };

  thanks(){
    this.message.push("Thanks for registering" + this.user.first_name + "We will send you an email at " + this.user.email)
    
  }
  
}
