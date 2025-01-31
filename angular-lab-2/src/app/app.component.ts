import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The best Sports App Ever!';
  disablesNewMessage = true;
  players = [
    {
      name: "Barry Bonds",
      sport: "Baseball",
      active: true
    },
    {
      name: "Arugala Jones",
      sport: "Hockey",
      active: false
    },
    {
      name: "Jake Cohen",
      sport: "Curling",
      active: false
    }
  ]

  onSendPlayer() {
    let newPlayer = {
      name: "Mica",
      sport: "Darg Racing",
      active: true
    }
    this.players.push(newPlayer);
  }

  constructor() {
    console.log("Initiating Angular AppComponent Class");
    setTimeout(() => {
      this.disablesNewMessage = !this.disablesNewMessage;
    }
    , 2000)
  }
}
