import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
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
import { InputHomeComponent } from './components/input-home/input-home.component';
import { InputStyleComponent } from './components/input-style/input-style.component';
import { ModelPagesComponent } from './components/model-pages/model-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ChatsComponent,
    ReviewComponent,
    LinksComponent,
    InformationComponent,
    PackagesComponent,
    UsersComponent,
    LibraryComponent,
    SubscriptionComponent,
    SettingsComponent,
    InputHomeComponent,
    InputStyleComponent,
    ModelPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
