// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { SignalTest } from './signalTest/signalTest';
import { LifeCycleHooksParent } from './lifecycleHooks/lifecycleHooks';
import { RxjsTest } from './rxjs-test/rxjs-test';
import { DynamicComponent } from './dynamic-component/dynamic-component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'signal', component: SignalTest },
  { path: 'lifecycle', component: LifeCycleHooksParent },
  { path: 'rxjs', component: RxjsTest },
  { path: 'dynamic', component: DynamicComponent },
  { path: '**', redirectTo: '' } // Fallback route (optional)
];
