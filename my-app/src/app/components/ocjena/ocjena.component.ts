import { Component, OnInit, Input } from '@angular/core';
import { IKomentar } from '../../models/komentar.model'
import { pipe } from 'rxjs';

import { IProizvod } from '../../models/proizvod.model';

@Component({
  selector: 'app-ocjena',
  templateUrl: './ocjena.component.html',
  styleUrls: ['./ocjena.component.css']
})
export class OcjenaComponent implements OnInit {
  @Input() komentari: IKomentar[];
  ocjene: number[] = [];
  ukupna_ocjena: number;
  constructor() {
  }

  ngOnInit() {
    this.ocjene = this.komentari.map(kom => kom.ocjena);
    // this.ocjene = this.proizvod.komentari.map(oc=>oc.ocjene);
  }
  ukupnaOcjena(): number {
    const zbroj = this.ocjene.reduce((a, b) => a + b);
    this.ukupna_ocjena = Math.round((zbroj / this.ocjene.length));
    return this.ukupna_ocjena;
  }
  onClickMe(i: number): void {
    this.ocjene.push(i);

  }
}
