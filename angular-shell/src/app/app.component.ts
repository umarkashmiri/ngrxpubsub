import { Component, OnInit } from '@angular/core';
import { PubSubService } from 'postalrx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-shell';

  constructor(private postal: PubSubService) {

  }
  ngOnInit(): void {
    this.postal.Stream.subscribe(res => {
      console.log('Listening Shell:', res);
    })
  }
  publish() {
    this.postal.Stream.emit('published from shell');

  }
}
