import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = null;
  score = null;

  constructor(private _httpService: HttpService){}

  getUser(){
    this._httpService.retrieveUser(this.user)
    .then( user => {
      this.score = user.followers + user.public_repos
      console.log(user)
    } )
    .catch( err => (console.log(err)))

  }

}
