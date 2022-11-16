import { ReutilizaveisModule } from './reutilizaveis/reutilizaveis.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import 'web-component-essentials';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AgendaComponent } from './agenda/agenda.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    ReutilizaveisModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },{
        path: 'home',
        component: HomeComponent
      },{
        path: 'agenda',
        component: AgendaComponent
      }
    ])
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
