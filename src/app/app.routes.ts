import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: DashboardComponent,title:'Home page' },
  { path: 'about', component: AboutComponent,title:'About Us' },
  { path: 'contactus', component: ContactusComponent, title: 'Contact Us' },
  {path:'**',component:PagenotfoundComponent,title:'Page Not Found'}
];
