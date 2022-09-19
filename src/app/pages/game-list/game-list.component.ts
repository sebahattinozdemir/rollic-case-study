import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  games: Game[];
  constructor(public gameService: GameService) {
    this.games = this.gameService.games;
  }

  ngOnInit(): void {}

  searchOnGames(event) {
    this.games = this.gameService.games;

    let filtered = this.games.filter((game) =>
      game.gameName.includes(event.target.value)
    );

    this.games = [...filtered];
  }
}
