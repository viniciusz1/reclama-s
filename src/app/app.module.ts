import { ReutilizaveisModule } from './reutilizaveis/reutilizaveis.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  bootstrap: [AppComponent]
})
export class AppModule { }
