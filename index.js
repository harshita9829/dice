var randomNumber1 = Math.floor(Math.random()*6)+1; //1-6
var randomDiceImage = "dice"+randomNumber1+".png"; //dice1.png - dice6.png
var randomImageSource = "images/"+randomDiceImage;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

//For dice 2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomImageSource2 = "images/"+randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

//For the title
// var final= document.querySelector("h1");
// if(randomNumber1>randomNumber2){
// final.innerHTML="Player 1 Wins !";}
// if(randomNumber1==randomNumber2){
// final.innerHTML="Draw !";}
// if(randomNumber1<randomNumber2){
// final.innerHTML="Player 2 Wins !";
// }
var final= document.querySelector("h1");
if(randomNumber1>randomNumber2){
final.innerHTML="🚩 Player 1 Wins !";}
else if(randomNumber1==randomNumber2){
final.innerHTML="Draw !";}
else{
final.innerHTML="Player 2 Wins ! 🚩";
}
