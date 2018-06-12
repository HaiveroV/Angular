import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {AppComponent} from './app.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {AboutComponent} from './components/about/about.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SearchComponent} from './components/search/search.component';
import {TimelineComponent} from './components/timeline/timeline.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth-guard';
import { AuthService } from './auth-service.service';
import { ArticlesComponent } from './components/articles/articles.component';


const appRoutes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    NotFoundComponent,
    FooterComponent,
    NavbarComponent,
    SearchComponent,
    TimelineComponent,
    LoginComponent,
    RegisterComponent,
    ArticlesComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true })
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
