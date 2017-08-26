import "polyfills";
import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { CustomerSearchComponent } from "CustomerSearchComponent";
import { CustomerDetailsComponent } from "CustomerDetailsComponent";

var AppComponent = Component({
  selector: "helpline-customers-app",
  template: "<router-outlet></router-outlet>"
}).Class({
  constructor: [
    function() {}
  ]
})

var routing = RouterModule.forRoot(
  [
    {
      path: "",
      component: CustomerSearchComponent
    },
    {
      path: ":id",
      component: CustomerDetailsComponent
    }
  ]
)

var CustomerAppModule = NgModule ({
  imports: [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ CustomerSearchComponent, CustomerDetailsComponent, AppComponent ],
  bootstrap: [ AppComponent ]
}).Class({
  constructor: function() {
  }
});

platformBrowserDynamic().bootstrapModule(CustomerAppModule);
