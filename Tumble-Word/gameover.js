const playAgain = document.getElementById("playagain")
playAgain.onclick =()=>{
    location.href= './play.html'
    localStorage.clear();
}
  
phrase=["omg,You are a good typist." , "I like your typing Speed." , "Amazing Speed.",
 "So beautiful So Amazing just typing like a wow." ]

  var  negative_Phrases=("Try Again,Champ . You need to improve")
  
 function generateRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
  }


 const storage = parseInt(localStorage.getItem("score"));
 const getData = (localStorage.getItem("username"));



 const phrasing = generateRandomWord(phrase);

var message = document.getElementById("displayscore")
if (storage<5) {
    message.innerHTML = negative_Phrases + "Your Score is" + storage ;
}
else{
message.innerHTML = phrasing + " Your Score is " + storage ;
}

const background =new Audio('./Assets/assets_bgm.mp3')
  background.play();
  background.loop =true 
