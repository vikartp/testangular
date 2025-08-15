import { Component, computed, inject, resource, signal } from '@angular/core';
import { SignalTestService } from './signalService';

@Component({
    selector: 'app-signal-test',
    imports: [],
    template: `
      <h3>Name {{name()}}</h3>
      <button (click)="upper()"> Uppercase </button>
      <button (click)="lower()"> Lowercase </button>
      <button (click)="setRandom()"> Random </button>

      <h2>Cookie recipe</h2>

    <label>
      # of cookies:
      <input type="range" min="10" max="100" step="10" [value]="count()" (input)="update($event)" />
      {{ count() }}
    </label>

    <p>Butter: {{ butter() }} cup(s)</p>
    <p>Sugar: {{ sugar() }} cup(s)</p>
    <p>Flour: {{ flour() }} cup(s)</p>
  `,
    styles: ``,
})
export class SignalTest {
    testService = inject(SignalTestService);
    name = signal('Vikash');

    upper() {
        this.name.update((prev) => prev.toUpperCase());
        this.testService.flyingColor.set('black');
    }

    lower() {
        this.name.update((prev) => prev.toLowerCase());
        this.testService.flyingColor.set('hot');
    }

    setRandom() {
        this.name.set(Math.random().toString());
        this.testService.flyingColor.set('red');
    }

    count = signal(5);

    butter = computed(() => this.count() * 0.1);
    sugar = computed(() => this.count() * 0.05);
    flour = computed(() => this.count() * 0.2);

    resourceTest = resource({
        // Define a reactive computation.
        // The params value recomputes whenever any read signals change.
        params: () => ({ id: this.count() }),
        // Define an async loader that retrieves data.
        // The resource calls this function every time the `params` value changes.
        loader: ({ params }) => this.fetchUser(params),
    });

    update(event: Event) {
        const input = event.target as HTMLInputElement;
        this.count.set(parseInt(input.value));
    }

    async fetchUser(params: { id: number }) {
        console.log('fetchUser', params)
        return fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
    }
}
