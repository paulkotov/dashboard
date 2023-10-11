import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// inner modules
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  MatDialog,
  MatDialogModule
} from '@angular/material/dialog';

// pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { TeamsComponent } from './pages/teams/teams.component';

// components
import { NavigationMenuComponent } from './components/common/navigation-menu/navigation-menu.component';
import { NewsPanelComponent } from './components/panels/news-panel/news-panel.component';
import { NewsListComponent } from './components/common/news-list/news-list.component';
import { NewsCardComponent } from './components/common/news-card/news-card.component';
import { HashtagListComponent } from './components/common/hashtag-list/hashtag-list.component';
import { NewsCardDialogComponent } from './components/common/news-card-dialog/news-card-dialog.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogPanelComponent } from './components/log-panel/log-panel.component';
import { NewsFormComponent } from './components/forms/news-form/news-form.component';
import { UserPanelComponent } from './components/panels/user-panel/user-panel.component';
import { UserFormComponent } from './components/forms/user-form/user-form.component';
import { GamesFilterComponent } from './components/games-filter/games-filter.component';
import { TeamPanelComponent } from './components/panels/team-panel/team-panel.component';
import { TeamFormComponent } from './components/forms/team-form/team-form.component';
import { EventPanelComponent } from './components/panels/event-panel/event-panel.component';
import { EventFormComponent } from './components/forms/event-form/event-form.component';
import { PlayersComponent } from './pages/players/players.component';
import { PlayerPanelComponent } from './components/panels/player-panel/player-panel.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';

// services
import { NewsService } from './services/NewsService/news.service';
import { AuthService } from './services/AuthService/auth.service';
import { UsersService } from './services/UsersService/users.service';
import { CalendarService } from './services/CalendarService/calendar.service';
import { ImageService } from './services/ImageService/image.service';
import { PlayerFormComponent } from './components/forms/player-form/player-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CalendarPageComponent,
    CalendarComponent,
    NavigationMenuComponent,
    HomePageComponent,
    NewsPageComponent,
    EventsPageComponent,
    UsersPageComponent,
    TeamsComponent,
    NewsListComponent,
    NewsPanelComponent,
    NewsCardComponent,
    NewsCardDialogComponent,
    HashtagListComponent,
    ProfileComponent,
    LogPanelComponent,
    NewsFormComponent,
    UserPanelComponent,
    TeamPanelComponent,
    UserFormComponent,
    GamesFilterComponent,
    TeamFormComponent,
    EventPanelComponent,
    EventFormComponent,
    PlayersComponent,
    PlayerPanelComponent,
    PlayerFormComponent,
    ImageUploaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatChipsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  providers: [
    NewsService,
    AuthService,
    UsersService,
    CalendarService,
    ImageService,
    MatDialog,
  ],
  entryComponents: [
    NewsCardComponent,
    NewsCardDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
