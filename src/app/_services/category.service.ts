import { Injectable } from '@angular/core';
import { Category } from '../_models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements IRepository {
  
  categories:Category[]
  constructor() { 
    this.categories = [
      {id:1,name:"Arts & Crafts"},
      {id:2,name:"Automotive"},
      {id:3,name:"Baby"},
      {id:4,name:"Books"},
      {id:5,name:"Eletronics"},
      {id:6,name:"Women's Fashion"},
      {id:7,name:"Men's Fashion"},
      {id:8,name:"Health & Household"},
      {id:9,name:"Home & Kitchen"},
      {id:10,name:"Military Accessories"},
      {id:11,name:"Movies & Television"},
      {id:12,name:"Sports & Outdoors"},
      {id:13,name:"Tools & Home Improvement"},
      {id:14,name:"Toys & Games"},
    ]
  }


  getAll():Category[] {
    return this.categories.slice();
  }
  getById(id: number) :Category{
    return this.categories.find(a =>a.id === id)
  }
  add(category: Category):boolean {
    let result = false;
    const oldLength = this.categories.length;
    const newlength = this.categories.push(category);
    if(oldLength !== newlength){
        category.id = this.categories.length;
        result=true;
    }
    return result;
  }
  save(category: Category) {
    let result = false;
        const index = this.categories.findIndex(a => a.id === category.id);
        if(index >=0){
            this.categories[index] = category;
            result=true;
        }
        return result; 
  }
  delete(id: number) {
    let result = false;
        const index = this.categories.findIndex(a => a.id === id);
        if(index >=0){
            this.categories.splice(index,1);
            result=true;
        }
        return result; 
  }
}
