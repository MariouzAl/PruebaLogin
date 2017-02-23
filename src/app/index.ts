import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import {FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";


import {HelloComponent} from './hello';
import {LoginComponent} from './components/login/login';


@NgModule({
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  declarations: [
    RootComponent,
    HelloComponent,
    LoginComponent
  ],
  bootstrap: [RootComponent]
})
export class AuthModule {}
