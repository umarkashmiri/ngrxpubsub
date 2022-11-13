import { Component, OnInit } from '@angular/core';
import { PubSubService } from 'postalrx';
// import { PostalrxService } from 'postalrx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'navbar-mfe';

  constructor(private postal: PubSubService) { }
  ngOnInit(): void {
    // this.postal.Stream.subscribe(res => {
    //   console.log('Listening MFE:', res);
    // });
  }
  publish() {
    this.postal.Stream.emit('published from MFE');
  }

}
