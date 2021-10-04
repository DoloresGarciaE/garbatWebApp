import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'auth', loadChildren: () => import('./authorization/authorization.module').then(m =>
      m.AuthorizationModule)
  },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m=> m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
