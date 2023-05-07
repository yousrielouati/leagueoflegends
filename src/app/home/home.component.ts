import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChampionModel } from '../models/champion.model';
import { FreeChampionsModel } from '../models/freeChampions.model';
import { ChampionsService } from '../services/champions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  allChampions: ChampionModel [] = [];
  freeChampions: ChampionModel [] = [];
  freeChampionsNewPlayers: ChampionModel [] = [];
  freeChampionsIds!: FreeChampionsModel;
  imagesUrl = environment.apiImages;
  subscription!: Subscription;

  constructor(
    private championsService: ChampionsService
  ) { }


  ngOnInit(): void {
    // get free champions
    this.championsService.getFreeChampions().subscribe(
      (response: FreeChampionsModel)=>{
        this.freeChampionsIds = response;
        //get all champions
        this.championsService.getAllChampionsDetails();
        this.subscription = this.championsService.allChampionsSubj.subscribe(
          (response)=>{
             this.allChampions = response;
              // get free champions details
              this.allChampions.forEach((champion: ChampionModel)=>{
                if(this.freeChampionsIds.freeChampionIds.indexOf(+champion.key) >=0 )
                  this.freeChampions.push(champion);
                if(this.freeChampionsIds.freeChampionIdsForNewPlayers.indexOf(+champion.key) >=0)
                  this.freeChampionsNewPlayers.push(champion);
              });
        });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
