import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
  @Input() game: Game;
  constructor(private gameService: GameService) {}

  ngOnInit(): void {}

  deleteGame() {
    const indexOfObject = this.gameService.games.findIndex((game) => {
      return game.gameName === this.game.gameName;
    });
    this.gameService.games.splice(indexOfObject, 1);
  }
}
