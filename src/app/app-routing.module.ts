import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login-content',
    loadChildren: () => import('./login-content/login-content.module').then( m => m.LoginContentPageModule)
  },
  {
    path: 'otp-input',
    loadChildren: () => import('./otp-input/otp-input.module').then( m => m.OtpInputPageModule)
  },
  {
    path: 'dasboard',
    loadChildren: () => import('./dasboard/dasboard.module').then( m => m.DasboardPageModule)
  },
  {
    path: 'dasboard-home',
    loadChildren: () => import('./dasboard-home/dasboard-home.module').then( m => m.DasboardHomePageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./activity/activity.module').then( m => m.ActivityPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'tracking-lokasi',
    loadChildren: () => import('./tracking-lokasi/tracking-lokasi.module').then( m => m.TrackingLokasiPageModule)
  },
  {
    path: 'cenceled',
    loadChildren: () => import('./cenceled/cenceled.module').then( m => m.CenceledPageModule)
  },
  {
    path: 'confirm-rating',
    loadChildren: () => import('./confirm-rating/confirm-rating.module').then( m => m.ConfirmRatingPageModule)
  },
  {
    path: 'personal-user',
    loadChildren: () => import('./personal-user/personal-user.module').then( m => m.PersonalUserPageModule)
  },
  {
    path: 'cancel-ride',
    loadChildren: () => import('./cancel-ride/cancel-ride.module').then( m => m.CancelRidePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'home-driver',
    loadChildren: () => import('./home-driver/home-driver.module').then( m => m.HomeDriverPageModule)
  },
  {
    path: 'tracking-driver',
    loadChildren: () => import('./tracking-driver/tracking-driver.module').then( m => m.TrackingDriverPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
