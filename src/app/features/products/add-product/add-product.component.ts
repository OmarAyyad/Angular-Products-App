import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_models/product';
import {NgForm} from '@angular/forms'
import { ProductService } from 'src/app/_services/Product.service'
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { Category } from 'src/app/_models/Category';
import { PaymentType } from 'src/app/_models/Payment-type';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
@Input() product:Product;
isDisabled:Boolean;

categories:Category[];
paymentTypes:PaymentType[];

  constructor(public categoryService:CategoryService,
    public paymentTypeService:PaymentTypeService,
    public productService:ProductService,
    public router:Router) { 

    this.product = {category:{id:-1},paymentTypes:[],tags:[],imagesUrl:['./assets/img/products/product-grey-1.jpg']};
    this.categories = categoryService.getAll();
    this.paymentTypes = paymentTypeService.getAll();

  }

  ngOnInit() {

    this.isDisabled= this.product.discount >0?false:true;
  }

  

  OnSale(isOnSale:Boolean){
    this.isDisabled = !isOnSale;
  }


  onPaymentChange(value:boolean,paymentType:PaymentType){
    if(value){
      this.product.paymentTypes.push(paymentType);
      
    }
    else{
      const index = this.product.paymentTypes.findIndex(a => a.id === paymentType.id);
      this.product.paymentTypes.splice(index,1);
    }
  }

  changePayment(paymentType:PaymentType):boolean{

     return this.product.paymentTypes.find(a => a.id === paymentType.id) === undefined ? false:true;

  }

  onTagAdd(txtTag:HTMLInputElement){
    if(txtTag.value !=''){

      this.product.tags.push(txtTag.value);
      txtTag.value ='';
    }
  }


  onNotSale(txtDis:HTMLInputElement){
    txtDis.value = '';
    this.isDisabled = !this.isDisabled;
  }

  NotSale():Boolean{
    return this.isDisabled;
  }


  removeTag(index:number){
    this.product.tags.splice(index,1);

  }

  removeAllTag(){
    this.product.tags = [];
  }


  OnSave(AForm: NgForm){
    console.log(AForm);
    let res = this.productService.add(this.product);
    console.log(res);
    console.log(this.productService.getAll());
    this.router.navigate(['home']);
  }


}
