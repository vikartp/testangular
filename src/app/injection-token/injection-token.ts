import { Component, inject } from '@angular/core';
import { JSON_PLACEHOLDER_URL } from './inject.interface';


@Component({
  selector: 'app-injection-token',
  imports: [],
  template: `
    <p>
      injection-token works!
    </p>
  `,
  styles: ``
})
export class InjectionTokenComp {
  jsonUrl = inject(JSON_PLACEHOLDER_URL);
  ngOnInit() {
    console.log(this.jsonUrl);
  }
}
