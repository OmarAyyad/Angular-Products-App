import { PaymentType } from './Payment-type';
import { Category } from './Category';

export class Product{
    id?:number;
    name?:string;
    discription?:string;
    price?:number;
    discount?:number;
    imagesUrl?:string[];
    paymentTypes?:PaymentType[];
    category?:Category;
    tags?:string[];
}