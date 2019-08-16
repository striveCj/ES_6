export var color="red";
export let name="Nicholas";
export  const magicNumber=7;

export function  sum(num1,num2) {
    return num1+num1;
}

export class Rectangle{
    constructor(length,width) {
        this.length=length;
        this.width=width;
    }

}
function subtract(num1,num2) {
    return num1-num2;
}

export {subtract as add}
export function multiply(num1,num2) {
    return num1*num2;
}

export function setName(newName) {
    name=newName;
}

Array.prototype.pushAll=function (items) {
    if (!Array.isArray(items)){
        throw new TypeError("参数必须是一个数组");
    }

    return this.push(...items);
}

