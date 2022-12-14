import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: 'splash',loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)},
  {path: 'user',loadChildren: () => import('./home/user/user.module').then( m => m.UserPageModule)},
  {path: 'survey1',loadChildren: () => import('./home/user/pages/survey1/survey1.module').then( m => m.Survey1PageModule)},
  {path: 'survey2',loadChildren: () => import('./home/user/pages/survey2/survey2.module').then( m => m.Survey2PageModule)},
  {path: 'survey3',loadChildren: () => import('./home/user/pages/survey3/survey3.module').then( m => m.Survey3PageModule)},
  {path: 'success',loadChildren: () => import('./home/user/pages/success/success.module').then( m => m.SuccessPageModule)},
  {path: 'admin1',loadChildren: () => import('./home/admin/admin1/admin1.module').then( m => m.Admin1PageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
