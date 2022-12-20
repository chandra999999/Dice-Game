
function random() {
    var n = Math.random();
    var e = Math.floor((n * 6));
    return e;
}
var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = "dice-six-faces-one.png";

imgArray[1] = new Image();
imgArray[1].src = "dice-six-faces-two.png";

imgArray[2] = new Image();
imgArray[2].src = "dice-six-faces-three.png";

imgArray[3] = new Image();
imgArray[3].src = "dice-six-faces-four.png";

imgArray[4] = new Image();
imgArray[4].src = "dice-six-faces-five.png";

imgArray[5] = new Image();
imgArray[5].src = "dice-six-faces-six.png";

 

function loadimage() {
    var ch1=random();
    var ch2=random();

    document.getElementById("figure1").src=imgArray[ch1].src;
    document.getElementById("figure2").src=imgArray[ch2].src;

  if(ch1>ch2){
     document.querySelector("h1").textContent="Player 1 Won";
  }
  else if(ch2>ch1){
    document.querySelector("h1").textContent="Player 2 Won";
  }else{
    document.querySelector("h1").textContent="Draw PLay Again";
  }

}
 
