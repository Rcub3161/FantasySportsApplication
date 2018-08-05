import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  nflStartDate: Date = new Date('September 6, 2018 16:30:00');
  draftDate: Date = new Date('August 26, 2018 19:00:00');
  ngOnInit() {

  }

}
