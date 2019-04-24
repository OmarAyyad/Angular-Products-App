import { Injectable } from '@angular/core';
import { PaymentType } from '../_models/Payment-type';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService implements IRepository {
  
  paymentTypes:PaymentType[]
  constructor() { 
    this.paymentTypes = [
      {id:1,name:"Direct Bank Transfare"},
      {id:2,name:"Cheque Payment"},
      {id:3,name:"Paypal"},
      {id:4,name:"Visa"},
      {id:5,name:"Mastercard"},
      {id:6,name:"On Dilivery"}
    ];
  }

  getAll(){
    return this.paymentTypes.slice();
  }

  getById(id:Number){
    return this.paymentTypes.find(a => a.id === id);
  }

  add(paymentType:PaymentType){
    let result = false;
        const oldLength = this.paymentTypes.length;
        const newlength = this.paymentTypes.push(paymentType);
        if(oldLength !== newlength){
          paymentType.id = this.paymentTypes.length;
            result=true;
        }
        return result;
  }

  save(paymentType:PaymentType) {
    let result = false;
        const index = this.paymentTypes.findIndex(a => a.id === paymentType.id);
        if(index >=0){
            this.paymentTypes[index] = paymentType;
            result=true;
        }
        return result; 
  }
  delete(id: number) {
    let result = false;
        const index = this.paymentTypes.findIndex(a => a.id === id);
        if(index >=0){
            this.paymentTypes.splice(index,1);
            result=true;
        }
        return result; 
  }
}
