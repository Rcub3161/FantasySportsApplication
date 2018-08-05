import { Component, OnInit } from '@angular/core';
import { Observable, timer } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  nflStartDate: Date = new Date('9/16/2018');
  DaysLeft: number;
  HoursLeft: number;
  MinutesLeft: number;
  SecondsLeft: number;
  time = 1000; // one second
  constructor() { }

  ngOnInit() {
    this.UpdateCountDown();
    this.StartCountDown();
  }

  StartCountDown() {
    const source = timer(this.time);
    source.subscribe(value => {
      this.UpdateCountDown();
    });
  }

  UpdateCountDown() {
    let delta = Math.abs(this.nflStartDate.getTime() - Date.now()) / 1000;
    // calculate (and subtract) whole days
    this.DaysLeft = Math.floor(delta / 86400);
    delta -= this.DaysLeft * 86400;

    // calculate (and subtract) whole hours
    this.HoursLeft = Math.floor(delta / 3600) % 24;
    delta -= this.HoursLeft * 3600;

    // calculate (and subtract) whole minutes
    this.MinutesLeft = Math.floor(delta / 60) % 60;
    delta -= this.MinutesLeft * 60;

    // what's left is seconds
    const seconds = Math.round(delta % 60);
    this.SecondsLeft = seconds === 60 ? 0 : seconds ;

    this.StartCountDown();
  }

}
