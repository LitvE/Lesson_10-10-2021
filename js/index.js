/*
try{
    выражение;
    явная генерация ошибки: условие -> throw new Error()<Объект ошибки>;
} catch(e){
    выражение
} finally {
    выражение
}
*/
/*
let card1 = 800;
let card2 = 5000;

let sum = 1000;

try{
    if(card1 < sum) throw new Error ('You do not have enough money for this transaction!');
    card1 -= sum;
    card2 += sum;
} catch(e){
    console.log(e);
} finally {
    console.log('operation was ended');
    console.log(`card1: ${card1}, card2: ${card2}`);
}
*/

//Referance Error
/*
try{
    console.log(myValue);
} catch(e){
    console.log(e.name);
    console.log(e.massage);
}*/


class checkColor{
    constructor(value){
        if(value < 0 || value >  255) throw new RangeError('Color value is not in the range (0..255');

        if(isNaN(value)) throw new TypeError('The value must be a Number');
        this.value = value;
    }

    out(){
        console.log(`Color value is : ${this.value}`);
    }

}
/*
const color1 = new checkColor(100);
color1.out();
const color2 = new checkColor(-10);
color2.out();
const color3 = new checkColor(500);
color3.out();
const color4 = new checkColor('hello');
color4.out();*/
/*
class checkColors {
    constructor(colors){
        try{
            let checkedColors = [];
            colors.forEach(color => {
                let checkedColor = new checkColor(color);
                checkedColors.push(checkedColor.value);
            });
            this.colors = checkedColors;
        } catch(error){
            console.log(error);
        }

    }

    outolors(){
        console.log(`rgb(${this.colors.join(', ')})`);
    } 
}

const colors1 = new checkColors([10, 250, 100]);
colors1.outolors();

const colors2 = new checkColors([10, -250, 100]);
colors2.outolors();
*/

class RangeValidator {
    constructor(start, end){
        if(typeof start !== 'number' || typeof end !== 'number') throw new TypeError('wrong type');
        if(start > end) throw new RangeError('out of range: start > end');

        this._start = start;
        this._end = end;
    }

    set start(value){
        if(typeof value !== 'number') throw new TypeError('wrong type');
        if(value > end) throw new RangeError('out of range: start > end');
        this._start = value;
    }
    set end(value){
        if(typeof value !== 'number') throw new TypeError('wrong type');
        if(value > start) throw new RangeError('out of range: start > end');
        this._end = value;
    }
    get start(){
        return this._start;
    }
    get end(){
        return this._end;
    }

    numberValidate(numberValue){
        if(typeof numberValue !== 'number') throw new TypeError('wrong type');
        return numberValue >= this._start && numberValue <= this._end;
    }
}

const range1 = new RangeValidator(50, 100);
range1.numberValidate(75);