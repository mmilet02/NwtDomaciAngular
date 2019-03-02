import { Component, OnInit } from '@angular/core';
import { IProizvod } from '../../models/proizvod.model';
import { Observable } from 'rxjs';

import { ProizvodService } from '../../services/proizvod.service';

@Component({
  selector: 'app-proizvod-list',
  templateUrl: './proizvod-list.component.html',
  styleUrls: ['./proizvod-list.component.scss']
})
export class ProizvodListComponent implements OnInit {

  proizvodi: Observable<IProizvod[]>;
  constructor(private proizvodService: ProizvodService) { }
  ngOnInit(): void {
    this.proizvodi = this.proizvodService.getProizvode();
  }

  handleSearch() {
    let input: any, filter: any, ul: any, li: any, a: any, i: any, txtValue: any;

    input = document.getElementById('search-input');
    filter = input.value.toUpperCase();
    ul = document.querySelector('.productW');
    li = ul.querySelectorAll('.product');

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('a')[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }
}
