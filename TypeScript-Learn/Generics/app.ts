function identity1<T>(arg: T): T {
    return arg;
}
var output = identity1<string>("myString");


function loggingIdentity1<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

function loggingIdentity2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}


function identity2<T>(arg: T): T {
    return arg;
}
var myIdentity2: <T>(arg: T) => T = identity2;




function identity3<T>(arg: T): T {
    return arg;
}
var myIdentity3: <TU>(arg: TU) => TU = identity3;



function identity4<T>(arg: T): T {
    return arg;
}

var myIdentity4: { <T>(arg: T): T } = identity4;



interface IGenericIdentityFn {
    <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}
var myIdentity: IGenericIdentityFn = identity;



class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

var myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => (x + y);

var stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = (x, y) => (x + y);
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));



interface ILengthwise {
    length: number;
}

function loggingIdentity<T extends ILengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
loggingIdentity({ length: 10, value: 3 });


function create<T>(c: { new (): T; }): T {
    return new c();
}