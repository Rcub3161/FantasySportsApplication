
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { OauthTestComponent } from './oauth-test/oauth-test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CountdownComponent } from './welcome-page/countdown/countdown.component';
// External Libraries
import { OAuthModule } from '../../node_modules/angular-oauth2-oidc';


const appRoutes: Routes = [
  {path: 'welcome-page', component: WelcomePageComponent},
  {path: 'oauth-test', component: OauthTestComponent},
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome-page'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
   declarations: [
      AppComponent,
      WelcomePageComponent,
      PageNotFoundComponent,
      OauthTestComponent,
      NavigationComponent,
      CountdownComponent
   ],
   imports: [
      BrowserModule,
      OAuthModule.forRoot(),
      RouterModule.forRoot(appRoutes)

   ],
   providers: [],
   bootstrap: [
    AppComponent
   ]
})
export class AppModule { }
