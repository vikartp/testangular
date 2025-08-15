import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { delay, fromEvent, interval, map, mergeMap, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-rxjs-test',
  imports: [],
  templateUrl: 'rxjs.html',
  styles: ``
})
export class RxjsTest {
  constructor() {
    console.log('RxjsTest constructor');
    // interval(1000)
    //   .pipe(takeUntilDestroyed())
    //   .subscribe(count => console.log(count));
  }

  ngOnInit() {
    
    console.log('ngOnInit');
    const search$ = fromEvent<KeyboardEvent>(
      document.getElementById('search')!,
      'input'
    ).pipe(map((e) => (e.target as HTMLInputElement).value));

    // Fake API request function
    function fakeApi(term: string) {
      return of(`Results for "${term}"`).pipe(delay(1000)); // takes 1s
    }

    // Using mergeMap
    // search$
    //   .pipe(mergeMap((term) => fakeApi(term)))
    //   .subscribe((result) => console.log('mergeMap:', result));

    // Using switchMap
    search$
      .pipe(switchMap((term) => fakeApi(term)))
      .subscribe((result) => console.log('switchMap:', result));
  }
}
