import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'cartmodal',
    loadChildren: () => import('./cartmodal/cartmodal.module').then( m => m.CartmodalPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./auth/onboarding/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./auth/onboarding/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'signup-method',
    loadChildren: () => import('./auth/onboarding/signup-method/signup-method.module').then( m => m.SignupMethodPageModule)
  },
  {
    path: 'phone',
    loadChildren: () => import('./auth/onboarding/phone/phone.module').then( m => m.PhonePageModule)
  },
  {
    path: 'verify-phone',
    loadChildren: () => import('./auth/onboarding/verify-phone/verify-phone.module').then( m => m.VerifyPhonePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./auth/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./auth/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'final-screen',
    loadChildren: () => import('./auth/onboarding/final-screen/final-screen.module').then( m => m.FinalScreenPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
