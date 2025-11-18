
const formatValue = (value: string | number | boolean): string | number | boolean => {
    if(typeof value === 'string'){
        return value.toUpperCase();
    }
    if(typeof value === 'number'){
        return value * 10 ;
    }
    if(typeof value === 'boolean'){
        return !value ;
    }
    return value;
}

const getLength = (value: string | any[]): number => {
    if(typeof value === 'string'){
        return value.length;
    }
    if(Array.isArray(value)){
        return value.length;
    }
    return 0;
}

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    getDetails(): string{
        return `'Name : ${this.name}, Age: ${this.age}'`;
    }
}

interface Arr {
    title: string;
    rating: number;
}
const filterByRating = (arrs : Arr []): Arr[] =>{
    return arrs.filter(arr => arr.rating >= 4);
}

interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const filterActiveUsers = (users: User[]): User[] => {
    return users.filter(user => user.isActive === true);
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable : boolean; 
}
const printBookDetails = (book: Book): void => {
    const available = book.isAvailable ? "Yes" : "No" ;
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`);
    
}

const getUniqueValues = (ar1:(string | number)[], ar2:(string | number)[]): (string | number)[] =>{
    const combine = [...ar1, ...ar2];
    const uniquevalue :(string | number)[] = [];
    for (let i = 0; i < combine.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniquevalue.length; j++) {
      if (combine[i] === uniquevalue[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniquevalue.push(combine[i]);
    }
  }
  return uniquevalue;
}

interface Product {
    name: string;
    price: number;
    quantity: number;
    discount? : number;
}
const calculateTotalPrice = (products:Product[] ): number =>{
    if(products.length === 0 ) return 0;
    return products.map(product => {
        const total = product.price * product.quantity;
        if(product.discount){
            return total * (1 - product.discount / 100);
        }
        return total;
    }).reduce((sum,curr) => sum + curr, 0);

}
