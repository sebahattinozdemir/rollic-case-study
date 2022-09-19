import { Injectable } from '@angular/core';
import { Game } from '../models/game.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  games: Game[] = [];

  constructor() {}
}
