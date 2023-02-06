import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const AppRoutes: Routes = [

  { path: '', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'app', loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule) }
]
@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes,{
    useHash: true,
    relativeLinkResolution: 'legacy'
}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }