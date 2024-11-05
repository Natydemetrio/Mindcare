import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Este é o módulo de rotas
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';
import { TimerComponent } from './pages/timer/timer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExercisesComponent,
    TimerComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Certifique-se de que AppRoutingModule está aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
