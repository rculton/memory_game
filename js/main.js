console.log("Up and running");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var flipCard = function(cardID){
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);

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

