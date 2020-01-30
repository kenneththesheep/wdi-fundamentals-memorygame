//console.log("Up and running!");
/*let cardOne="queen";
let cardTwo="queen";
let cardThree="king";
let cardFour="king";
console.log("User flipped "+cardOne);
console.log("User flipped "+cardThree);
if(cardsInPlay.length===2)
{
	if(cardsInPlay[0]===cardsInPlay[cardsInPlay.length-1])
	{
		alert("You found a match!");
	}else
	{
			alert("Try again!");
	}


}*/
let cards=["queen", "queen", "king", "king"]
let cardsInPlay=[];
//function to check for match
function checkForMatch()
{
	if(cardsInPlay.length<2)
	{

	}
	else{
		if(cardsInPlay[0]===cardsInPlay[1])
		{
			console.log("You found a match!");
		}else
		{
			console.log("Try again!");
		}
		}		
}
//function to check which card is picked
function flipCard(cardID)
{
	console.log("User flipped "+ cards[cardID]);
	cardsInPlay.push(cards[cardID]);
	checkForMatch();
	
	/*let cardOne=cards[0];
	cardsInPlay.push(cardOne);
	console.log("User flipped " + cardOne);

	let cardTwo=cards[2];
	cardsInPlay.push(cardTwo);
	console.log("User flipped " + cardTwo);*/

}

flipCard(0);
flipCard(2);
