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
//let cards=["queen", "queen", "king", "king"]
const cards=[
{//card 1
rank:"queen",
suit:"hearts",
cardImage:"images/queen-of-hearts.png"
},
{//card 2
rank:"queen",
suit:"diamonds",
cardImage:"images/queen-of-diamonds.png"
},
{//card 3
rank:"king",
suit:"hearts",
cardImage:"images/king-of-hearts.png"
},
{//card 4
rank:"king",
suit:"diamonds",
cardImage:"images/king-of-diamonds.png"
}
];
var score=0;
let cardsInPlay=[];
document.getElementById('score').innerHTML =  score;
function createBoard()
{
//	document.getElementById('score').innerHTML =  score;
	for(let i=0;i<cards.length;i++)
	{
		let cardElement=document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		document.getElementById("game-board").appendChild(cardElement);
		cardElement.addEventListener('click',flipCard);
		
	}
}
//function to check for match
function checkForMatch()
{

	if(cardsInPlay.length<2)
	{

	}
	else{
		if(cardsInPlay[0]===cardsInPlay[1])
		{
			alert("You found a match!");
			score++;
			resetCard();
			cardsInPlay=[];
			document.getElementById('score').innerHTML =  score;
		}else
		{
			alert("Try again!");
			cardsInPlay=[];
			createBoard();
		}
		}		
}
//function to check which card is picked
function flipCard()
{	
	
	let cardID=this.getAttribute('data-id');
	//to check how to avoid duplpicate
	console.log("User flipped "+ cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	this.setAttribute('src',cards[cardID].cardImage);
	//console.log(cards[cardID].cardImage);
	//console.log(cards[cardID].suit);
	checkForMatch();
	
	/*let cardOne=cards[0];
	cardsInPlay.push(cardOne);
	console.log("User flipped " + cardOne);

	let cardTwo=cards[2];
	cardsInPlay.push(cardTwo);
	console.log("User flipped " + cardTwo);*/

}
function resetCard()
{
	for(let i=0;i<cards.length;i++)
	{
		//find out how to reset the cards
		console.log("resetting cards");
		
		
	}
}
function Reset() {
  //alert("Hi");
  var x = document.getElementById("Reset");
  x.onclick=reloadPage();
  
}
function reloadPage(){
   window.location.reload();
}
//flipCard(0);
//flipCard(2);
createBoard();

