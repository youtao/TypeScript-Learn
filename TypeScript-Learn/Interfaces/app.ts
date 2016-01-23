function printName(obj: { name: string }) {
    console.log(obj.name);
}
var obj = { age: 10, name: "张三" };
printName(obj);



interface IPerson {
    name: string;
    age:number;
}
function getName(obj:IPerson) {
    console.log(obj.name);
}
function getAge(obj:IPerson) {
    console.log(obj.age);
}
var zhangsan = { age: 10, name: "张三" };
getName(zhangsan);




interface ISquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: ISquareConfig): { color: string; area: number } {
    var square = { color: "white", area: 100 };
    if (config.color) {
        square.color = config.color;
    }
    if (config.width) {
        square.area = config.width * config.width;
    }
    return square;
}
var square = createSquare({ color: "black" });



interface ISearchFunc {
    (source: string, subString: string): boolean;
}
var search: ISearchFunc;
search = (src: string, sub: string) => {
    var result = src.search(sub);
    if (result === -1) {
        return false;
    }
    else {
        return true;
    }
}



interface IStringArray {
    [index: number]: string;
}
var array: IStringArray;
array = ["Bob", "Fred"];




interface IClock {
    currentTime: Date;
    setTime(d: Date);
}
class Clock implements IClock {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}


interface IShape {
    color: string;
}
interface IPenStroke {
    penWidth: number;
}
interface ISquare extends IShape, IPenStroke {
    sideLength: number;
}
var mySquare = <ISquare>{};
mySquare.color = "blue";
mySquare.sideLength = 10;
mySquare.penWidth = 5.0;
console.log(mySquare);


interface ICounter {
    (start: number): string;
    interval: number;
    reset(): void;
}
var c: ICounter;
c(10);
c.reset();
c.interval = 5.0;
