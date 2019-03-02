import { Component, OnInit } from '@angular/core';
import { ProizvodService } from '../../services/proizvod.service';
import { ActivatedRoute } from '@angular/router';
import { IProizvod } from '../../models/proizvod.model';

@Component({
  selector: 'app-detalji',
  templateUrl: './detalji.component.html',
  styleUrls: ['./detalji.component.css']
})
export class DetaljiComponent implements OnInit {
  product_id: number;
  proizvod: IProizvod;
  constructor(private router: ActivatedRoute,
    private productService: ProizvodService, ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.product_id = +params['id'];
      this.productService.getProduct(this.product_id).subscribe(prod => {
        this.proizvod = prod;
      });
    });
  }

}
