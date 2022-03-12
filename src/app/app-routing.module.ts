import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';
import {AdminComponent} from './admin/admin.component';
import {PostFormComponent} from './post-form/post-form.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent, children: [
      {path: 'about-extra', component: AboutExtraComponent}
    ]},
  {path: 'admin', component: AdminComponent},
  {path: 'post-form/:id', component: PostFormComponent},
  {path: 'error-page', component: ErrorPageComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'error-page'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
