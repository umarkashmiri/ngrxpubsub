import { Injector, NgModule, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { PubSubService } from 'postalrx';
// import { PostalrxModule } from 'postalrx';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [PubSubService],
  // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('app-navbar', el);
  }
}
