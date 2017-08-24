import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  power = []

  over9000 = 'Over 9000!'

  saiyan = {
    powerlevel: ''
  }

  calculatePower(){
    this.power.pop();
    this.power.push(this.saiyan.powerlevel);
    this.saiyan.powerlevel = '';
  }
}
