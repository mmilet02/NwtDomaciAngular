import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProizvodService } from '../../services/proizvod.service';
import { IProizvod } from '../../models/proizvod.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  favorite = [];
  constructor(private proizvodService: ProizvodService) { }

  ngOnInit() {

    this.proizvodService.favoriti.subscribe(proizvodi => {
      this.favorite = proizvodi;
    });
  }

}
