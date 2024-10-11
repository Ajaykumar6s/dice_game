var randInt;
randInt=Math.random();
randInt=Math.floor(randInt*6)+1;

var randInt2;
randInt2=Math.random();
randInt2=Math.floor(randInt2*6)+1;

var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];

if(randInt===1)
{
    image1.setAttribute("src", "images/dice1.png");
}
else if(randInt===2)
{
    image1.setAttribute("src", "images/dice2.png");
}
else if(randInt===3)
{
    image1.setAttribute("src", "images/dice3.png");
}
else if(randInt===4)
{
    image1.setAttribute("src", "images/dice4.png");
}
else if(randInt===5)
{
    image1.setAttribute("src", "images/dice5.png");
}
else
{
    image1.setAttribute("src", "images/dice6.png");
}



if(randInt2===1)
{
    image2.setAttribute("src", "images/dice1.png");
}
else if(randInt2===2)
{
    image2.setAttribute("src", "images/dice2.png");
}
else if(randInt2===3)
{
    image2.setAttribute("src", "images/dice3.png");
}
else if(randInt2===4)
{
    image2.setAttribute("src", "images/dice4.png");
}
else if(randInt2===5)
{
    image2.setAttribute("src", "images/dice5.png");
}
else
{
    image2.setAttribute("src", "images/dice6.png");
}

var x=document.querySelectorAll("h1")[0];

if(randInt>randInt2){
    x.innerHTML="Ajay won ";
    x.classList.add("name");
}

else if(randInt<randInt2){
    x.innerHTML="Kamz Win ";
}

else{
    x.innerHTML="DRAW";
    x.style.color="black"
}