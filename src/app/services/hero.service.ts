import { MessageService } from './message.service';
import { Hero } from './../models/hero';
import { HEROES } from './../models/mock-heroes';
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Hello Service: fetched heroes.')
    return of(HEROES);
  }
}
