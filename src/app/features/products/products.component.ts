import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { ProductService } from '../../_services/Product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:Product[];
  data:string;

  constructor(public ps :ProductService) { }

  ngOnInit() {
   
   this.products = this.ps.getAll();
  }


  onChange(event:string){
    this.data=event;
  }

}
