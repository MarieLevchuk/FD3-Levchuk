class Product{

    // name:string;
    // scale:number;

    constructor(public name:string, public scale:number){
        // this.name = _name;
        // this.scale = _scale;
    }

    getScale():number{
        return this.scale;
    } 

    getName():string{
        return this.name;
    }
}

class Apple extends Product{
    constructor(_scale:number){
        super('Apple', _scale );
    }
}

class Grape extends Product{
    constructor(_scale:number){
        super('Grape', _scale );
    }
}

let apple = new Apple(10);
let grape = new Grape(3);
let myproduct = new Product('Candy', 100);
let myproduct2 = new Product('Pizza', 999);

console.log(apple.getName() + ' ' + apple.getScale());
console.log(grape.getName() + ' ' + grape.getScale());
console.log(myproduct.getName() + ' ' + myproduct.getScale());
console.log(myproduct2.getName() + ' ' + myproduct2.getScale());

class Scales{
    produts:Array<Product>;

    constructor(_products:Array<Product>){
        this.produts = _products
    }

    add(_product:Product):void{
        this.produts.push(_product);
        console.log(`a new product ${_product.getName()} was added`);        
    }

    getSumScale():number{
        let sum:number = 0;
        this.produts.forEach(item => sum+=item.getScale());

        return sum;
    } 

    getNameList ():Array<string>{
        let res:Array<string> = [];
        this.produts.forEach(item => res.push(item.getName()));

        return res;
    } 
}

let products = [apple, grape, myproduct];
let scales = new Scales(products);


console.log(scales.getNameList());
console.log(scales.getSumScale());

scales.add(myproduct2);

console.log(scales.getNameList());
console.log(scales.getSumScale());
