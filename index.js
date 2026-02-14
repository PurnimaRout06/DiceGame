var randomvar1 = Math.floor(Math.random()*6)+1;
var randomvar2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomvar1+".png");         
document.querySelector(".img2").setAttribute("src","images/dice"+randomvar2+".png");
if(randomvar1>randomvar2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomvar2>randomvar1){
    document.querySelector("h1").innerHTML ="🚩Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML ="🏳️It's a Draw!";
}