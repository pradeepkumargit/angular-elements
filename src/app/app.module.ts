import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector} from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents:[HelloWorldComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(injector: Injector) {
    const custom = createCustomElement(HelloWorldComponent, {injector: injector});
    customElements.define('app-hello-world', custom);
  }
  ngDoBootstrap() {}
}
