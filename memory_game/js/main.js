//console.log("Up and running!");
/*let cardOne="queen";
let cardTwo="queen";
let cardThree="king";
let cardFour="king";
console.log("User flipped "+cardOne);
console.log("User flipped "+cardThree);*/
let cards=["queen", "queen", "king", "king"]
cardsInPlay=[];
let cardOne;
cardOne=cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " +cardsInPlay[cardsInPlay.length-1]);
let cardTwo;
cardTwo=cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped " +cardsInPlay[cardsInPlay.length-1]);
if(cardsInPlay.length===2)
{
	if(cardsInPlay[0]===cardsInPlay[cardsInPlay.length-1])
	{
		alert("You found a match!");
	}else
	{
			alert("Try again!");
	}


}