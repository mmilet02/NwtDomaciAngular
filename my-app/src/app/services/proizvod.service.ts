import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter, map, find } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { IProizvod } from '../models/proizvod.model';
@Injectable({
  providedIn: 'root'
})
export class ProizvodService {

  proizvodi: Observable<IProizvod[]>;
  public favoriti: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private httpClient: HttpClient) {
    this.proizvodi = this.httpClient.get<IProizvod[]>('assets/proizvodi.json').pipe(
      map(proizvodi => {
        let newProizvodi = proizvodi;
        let pocetni_favoriti = newProizvodi
          .filter(proizvod => proizvod.favorite === true)
          .map(proizvod => {
            return { id: proizvod.id, naziv: proizvod.naziv };
          });

        this.favoriti.next(pocetni_favoriti);
        return proizvodi;
      })
    );
  }

  getProizvode(): Observable<IProizvod[]> {
    return this.proizvodi;
  }

  getProduct(id: number): Observable<IProizvod> {
    return this.proizvodi.pipe(
      map(proizvod => proizvod.find((pro) => pro.id === id))
    );
  }
}
