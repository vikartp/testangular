import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalTestService {
  flyingColor = signal('blue');
  constructor() { }
}
