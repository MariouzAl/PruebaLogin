import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './hello';
import {LoginComponent} from './components/login/login';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: HelloComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

];

export const routing = RouterModule.forRoot(routes);
