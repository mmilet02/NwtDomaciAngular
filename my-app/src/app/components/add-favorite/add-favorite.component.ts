import { Component, OnInit, Input } from '@angular/core';

import { ProizvodService } from '../../services/proizvod.service';
import { IProizvod } from '../../models/proizvod.model';

@Component({
  selector: 'app-add-favorite',
  templateUrl: './add-favorite.component.html',
  styleUrls: ['./add-favorite.component.css']
})
export class AddFavoriteComponent implements OnInit {
  @Input() proizvod: IProizvod;
  favoriti_promjenjen: any[];

  constructor(private proizvodService: ProizvodService) { }

  ngOnInit() {
    this.proizvodService.favoriti.subscribe(proizvodi => this.favoriti_promjenjen = proizvodi);

  }

  onClickMe() {
    this.proizvod.favorite = !this.proizvod.favorite;
    if (this.proizvod.favorite) {
      this.favoriti_promjenjen.push(this.proizvod);
      this.proizvodService.favoriti.next(this.favoriti_promjenjen);
    } else {
      this.favoriti_promjenjen = this.favoriti_promjenjen.filter(pro => pro.id !== this.proizvod.id);
      this.proizvodService.favoriti.next(this.favoriti_promjenjen);
    }
  }
}
