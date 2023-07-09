import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { GithubStatusComponent } from './pages/github-status/github-status.component';
import { HomeComponent } from './pages/home/home.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { ProjectsComponent } from './pages/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HomeComponent,
    AboutComponent,
    PresentationComponent,
    GithubStatusComponent,
    ExperienceComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
