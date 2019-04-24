import { Injectable } from '@angular/core';
import { Product } from 'src/app/_models/product';


@Injectable({
    providedIn: 'root'
  })

export class ProductService{
    products:Product[];

    constructor(){
        this.products = [
            {id:1,name:'photo camera 1',price:325,imagesUrl:['./assets/img/products/product-grey-1.jpg']},
            {id:2,name:'photo camera 2',price:325,discount:26,imagesUrl:['./assets/img/products/product-grey-1.jpg']},
            {id:3,name:'photo camera 3',price:325,imagesUrl:['./assets/img/products/product-grey-1.jpg']},
            {id:4,name:'photo camera 4',price:325,discount:26,imagesUrl:['./assets/img/products/product-grey-1.jpg']},
            {id:5,name:'photo camera 5',price:325,discount:26,imagesUrl:['./assets/img/products/product-grey-1.jpg']},
            {id:6,name:'photo camera 6',price:325,discount:26,imagesUrl:['./assets/img/products/product-grey-1.jpg']},
            {id:7,name:'photo camera 7',price:325,discount:26,imagesUrl:['./assets/img/products/product-grey-1.jpg']},
            {id:8,name:'photo camera 8',price:325,discount:26,imagesUrl:['./assets/img/products/product-grey-1.jpg']}
        
        
        ];
    }


    getAll():Product[]{
        return this.products.slice();
    }

    getById(id:Number):Product{
        return this.products.find(a => a.id === id);
    }

    add(product:Product):Boolean{
        let result = false;
        const oldLength = this.products.length;
        const newlength = this.products.push(product);
        if(oldLength !== newlength){
            product.id = this.products.length;
            result=true;
        }
        return result;
    }

    save(product:Product):Boolean{
        let result = false;
        const index = this.products.findIndex(a => a.id === product.id);
        if(index >=0){
            this.products[index] = product;
            result=true;
        }
        return result; 
    }

    delete(id:Number):Boolean{
        let result = false;
        const index = this.products.findIndex(a => a.id === id);
        if(index >=0){
            this.products.splice(index,1);
            result=true;
        }
        return result; 
    }
}