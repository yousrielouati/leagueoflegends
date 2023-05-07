import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChampionModel } from 'src/app/models/champion.model';
import { ChampionsService } from 'src/app/services/champions.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent implements OnInit,OnDestroy{

  subscription!: Subscription;
  imagesUrl = environment.apiImages;
  champion!: ChampionModel;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private championsService: ChampionsService

  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('key')) {
        this.router.navigate(['/home']);
      } else {
        let key = ""+paramMap.get('key');
        this.championsService.getAllChampionsDetails();
        this.subscription = this.championsService.allChampionsSubj.subscribe(
          (response)=>{
             this.champion = response.find(champion => champion.key == +key)!;
          });
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
