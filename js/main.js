console.log("Up and running");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
];
var cardsInPlay = [];
var flipCard = function(cardID){
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].suit);
	console.log(cards[cardID].cardImage);
	cardsInPlay.push(cards[cardID].rank);

};
var checkMatch = function(){
	if(cardsInPlay.length === 2)
	{
		if( cardsInPlay[0] === cardsInPlay[1])
		{
			alert("You found a match!");
			cardsInPlay.pop();
			cardsInPlay.pop();
		}
		else{
			alert("Sorry! Try again!");
			cardsInPlay.pop();
			cardsInPlay.pop();
		}
		
	}};

flipCard(0);
flipCard(2);
checkMatch();

