import { Component } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";

import template from "./template.html";

var CustomerSearchComponent = Component ({
  selector: "helpline-customer-search",
  template: template
}).Class ({
  constructor: [
    Http,
    Router,
    function(http, router) {
      this.customers = null;
      this.keywords = "";
      this.http = http;
      this.router = router;
    }
  ],
  search: function($event) {
    var self = this;
    self.keywords = $event;
    if (self.keywords.length < 3) {
      return;
    }
    self.http.get(
      "/customers.json?keywords=" + self.keywords
    ).subscribe(
      function(response) {
        self.customers = response.json().customers;
      },
      function(response) {
        window.alert(response);
      }
    );
  },
  viewDetails: function(customer) {
    this.router.navigate(["/", customer.id])
  }
})

export { CustomerSearchComponent };
