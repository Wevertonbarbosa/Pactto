import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { ReviewComponent } from './pages/review/review.component';
import { LinksComponent } from './pages/links/links.component';
import { InformationComponent } from './pages/information/information.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { UsersComponent } from './pages/users/users.component';
import { LibraryComponent } from './pages/library/library.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'chats',
    component: ChatsComponent,
  },
  {
    path: 'review',
    component: ReviewComponent,
  },
  {
    path: 'links',
    component: LinksComponent,
  },
  {
    path: 'information',
    component: InformationComponent,
  },
  {
    path: 'packages',
    component: PackagesComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'library',
    component: LibraryComponent,
  },
  {
    path: 'subscription',
    component: SubscriptionComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
