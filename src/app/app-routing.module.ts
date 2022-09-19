import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GameListComponent } from './pages/game-list/game-list.component';
import { NewGameComponent } from './pages/new-game/new-game.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'game-list',
        component: GameListComponent,
      },
      {
        path: 'new-games',
        component: NewGameComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
