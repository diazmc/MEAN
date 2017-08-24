var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: Array<number> = [1,2,3,4]
var myObj: any = { name:<string> 'Bill'}
var anythingVariable: any = "Hey";
var anythingVariable: any = 25;
var arrayOne: Array<boolean> = [true, false, true, true];
var arrayTwo: Array<any> = [1, 'abc', true, 2];
var myObj: any = { x:<number> 5, y:<number> 10};

class MyNode {
    val: number;

    constructor(value: number) {
        this.val = 0
        this.val = value
    }
    doSomething(){
        this._priv = 10
    }
}

let myNodeInstance = new MyNode(1)
console.log(myNodeInstance.val);

function myFunction() {
    console.log('Hello World');
    return;
}

function sendingErrors(message: string): never{
    throw new Error(message)
}


