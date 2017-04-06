import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent }   from './category.component';
import { LoginComponent } from './login/login.component';
import { CompanyComponent } from './company/company.component';
import { LoginTComponent } from './login-t/login-t.component';

const routes: Routes = [
  { path: '', redirectTo: '/loginT', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'categorys',  component: CategoryComponent },
  { path: 'company',  component: CompanyComponent },
  { path: 'loginT',  component: LoginTComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
