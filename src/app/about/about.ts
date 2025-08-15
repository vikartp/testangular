import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <p>
      about works!
    </p>
  `,
  styles: ``
})
export class About {

}
