import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './pages/game-list/game-list.component';
import { NewGameComponent } from './pages/new-game/new-game.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameService } from './services/game.service';
import { GameCardComponent } from './pages/game-list/components/game-card/game-card.component';

@NgModule({
  declarations: [AppComponent, GameListComponent, NewGameComponent, GameCardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [GameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
