import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { EventFormComponent } from './components/forms/event-form/event-form.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserFormComponent } from './components/forms/user-form/user-form.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { NewsFormComponent } from './components/forms/news-form/news-form.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { TeamFormComponent } from './components/forms/team-form/team-form.component';
import { PlayersComponent } from './pages/players/players.component';
import { PlayerFormComponent } from './components/forms/player-form/player-form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'calendar', pathMatch: 'full' },
  { path: 'calendar', component: CalendarPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'events', component: EventsPageComponent },
  { path: 'event/:id', component: EventFormComponent },
  { path: 'event/new', component: EventFormComponent, pathMatch: 'full' },
  { path: 'teams', component: TeamsComponent },
  { path: 'team/:id', component: TeamFormComponent },
  { path: 'team/new', component: TeamFormComponent, pathMatch: 'full' },
  { path: 'users', component: UsersPageComponent },
  { path: 'user/:id', component: UserFormComponent },
  { path: 'user/new', component: UserFormComponent, pathMatch: 'full' },
  { path: 'news', component: NewsPageComponent,
    // children: [
    //   { path: ':id', component: NewsFormComponent },
    //   { path: 'new', component: NewsFormComponent }
    // ]
  },
  { path: 'news/:id', component: NewsFormComponent },
  { path: 'news/new', component: NewsFormComponent, pathMatch: 'full' },
  { path: 'players', component: PlayersComponent },
  { path: 'player/:id', component: PlayerFormComponent },
  { path: 'player/new', component: PlayerFormComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'calendar' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
