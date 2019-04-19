import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-redirect',
  template: `
    <p>
      redirect works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class RedirectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
