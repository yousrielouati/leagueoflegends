import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChampionModel } from '../models/champion.model';
import { FreeChampionsModel } from '../models/freeChampions.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  allChampionsSubj = new Subject<ChampionModel[]>();



  constructor(private http: HttpClient) { }

  getFreeChampions(): Observable<FreeChampionsModel> {
    return this.http.get<FreeChampionsModel>(`${environment.apiFreeChampionsURL}?api_key=${environment.apiFreeChampionsKey}`);
  }

  getAllChampionsDetails() {
    return this.http.get<any>(`${environment.apiAllChampionsURL}`).subscribe((response: any)=>{
      this.allChampionsSubj.next(Object.values(response.data));
    });
  }
}
