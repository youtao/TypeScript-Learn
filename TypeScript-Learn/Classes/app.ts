class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
var greeter = new Greeter("world");
greeter.greet();




class Animal {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(meters: number = 0) {
        console.log(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(meters = 5) {
        console.log("Slithering...");
        super.move(meters);
    }
}
class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(meters = 45) {
        console.log("Galloping...");
        super.move(meters);
    }
}
var sam = new Snake("Sammy the Python");
var tom: Animal = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);






class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (newName.length > 0) {
            this._fullName = newName;
        }
        else {
            console.log('字符串长度必须大于0');
        }
    }
}
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}




class Grid {
    static origin = { x: 0, y: 0 };
    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) { }
}

var grid1 = new Grid(1.0);  // 1x scale
var grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
