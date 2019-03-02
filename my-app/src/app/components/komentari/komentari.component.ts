import { Component, OnInit, Input } from '@angular/core';
import { IKomentar } from '../../models/komentar.model'

@Component({
  selector: 'app-komentari',
  templateUrl: './komentari.component.html',
  styleUrls: ['./komentari.component.css']
})
export class KomentariComponent implements OnInit {
  @Input() komentari: IKomentar[];
  constructor() { }

  ngOnInit() {

  }
}
