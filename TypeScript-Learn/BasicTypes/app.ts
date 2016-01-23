var isBoolen: boolean = true;
var height: number = 180;
var name: string = '张三';
var names: string[] = ["张三", "李四", "王五"];
var ages: Array<number> = [12, 23, 45];

enum Color {
    Red= 0,
    Green= 1,
    Blue=2
}
var c: Color = Color.Blue;
var colorName: string = Color[1];
console.log(colorName);

var notSure: any = 4;
notSure = '你好呀';
notSure = true;

var list: any = ['12', 12, true];
list[1] = '你好呀';

function write():void   {
    console.log('你好呀');
}