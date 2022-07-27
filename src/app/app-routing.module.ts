import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';

// Routes - setup routes here
const routes: Routes = [
  {title: 'Home', path: 'home', component: HomeComponent},
  {title: 'Project', path: 'project', component: ProjectComponent},
  {title: 'Contact Me', path: 'contact', component: ContactMeComponent},
  {title: 'About Me', path: 'about', component: AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
