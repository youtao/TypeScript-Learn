# Functions

## Functions

    //Named function
    function add1(x, y) {
        return x + y;
    }
    //Anonymous function
    var add2 = (x, y) => (x + y);

## Function Types

    // myAdd has the full function type
    var add3 = (x: number, y: number): number => (x + y);

    // The parameters 'x' and 'y' have the type number
    var add4: (baseValue: number, increment: number) => number = (x, y) => (x + y);

## Optional and Default Parameters

    function buildName1(firstName: string, lastName?: string) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    var result1 = buildName1("Bob");  //works correctly now
    var result3 = buildName1("Bob", "Adams");  //ah, just right

## Rest Parameters


    function buildName2(firstName: string, ...restOfName: string[]) {
        return firstName + " " + restOfName.join(" ");
    }
    var employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");

## Lambdas and using 'this'

    var deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker() {
            // Notice: the line below is now a lambda, allowing us to capture 'this' earlier
            return () => {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);

                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            }
        }
    }

    var cardPicker = deck.createCardPicker();
    var pickedCard = cardPicker();
    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

## Overloads

    var suits = ["hearts", "spades", "clubs", "diamonds"];
    function pickCard(x: { suit: string; card: number; }[]): number;
    function pickCard(x: number): { suit: string; card: number; };
    function pickCard(x): any {
        // Check to see if we're working with an object/array
        // if so, they gave us the deck and we'll pick the card
        if (typeof x == "object") {
            var pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        // Otherwise just let them pick the card
        else if (typeof x == "number") {
            var pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }    
    }

    var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
    var pickedCard1 = myDeck[pickCard(myDeck)];
    console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

    var pickedCard2 = pickCard(15);
    console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

