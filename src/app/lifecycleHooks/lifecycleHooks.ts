import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-lifecycle-hooks',
    imports: [],
    template: `
    <p>
      Lifecycle Hook works!
    </p>

    <h3>Input: {{testInp}}</h3>
  `,
    styles: ``,
})
export class LifeCycleHooks {
    @Input() testInp!: string;

    constructor() {
        console.log('constructor');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges');
    }

    ngOnInit() {
        console.log('ngOnInit');
    }

    ngDoCheck() {
        console.log('ngDoCheck');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy');
    }
}


@Component({
    selector: 'app-lifecycle-hooks-parent',
    imports: [
        LifeCycleHooks
    ],
    template: `
      <app-lifecycle-hooks [testInp]="testProps" ></app-lifecycle-hooks>
      <button (click)="changeProp()">change</button>
    `,
    styles: ``,
})
export class LifeCycleHooksParent {
    testProps = 'Vicks'
    changeProp() {
        this.testProps = Math.random().toString()
    }
}