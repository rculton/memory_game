console.log("Up and running");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo;
cardTwo = cards[3];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);


if(cardsInPlay.length === 2)
{
	if( cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match!");
	}
	else{
		alert("Sorry! Try again!");
	}
	cardsInPlay.pop();
	cardsInPlay.pop();
}
