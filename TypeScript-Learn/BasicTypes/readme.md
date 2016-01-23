# TypeScript基本类型

## Boolean

    var isBoolen: boolean = true;

## Number

    var height: number = 180;

## String

    var name: string = '张三';

## Array

    var names: string[] = ["张三", "李四", "王五"];
    var ages: Array<number> = [12, 23, 45];

## Enum

    enum Color {
        Red= 0,
        Green= 1,
        Blue=2
    }
    var c: Color = Color.Blue;
    var colorName: string = Color[1];
    console.log(colorName);

## Any

    var notSure: any = 4;
    notSure = '你好呀';
    notSure = true;

    var list: any = ['12', 12, true];
    list[1] = '你好呀';

## Void

    function write():void   {
        console.log('你好呀');
    }

