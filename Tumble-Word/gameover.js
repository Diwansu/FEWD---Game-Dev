const playAgain = document.getElementById("playagain")
playAgain.onclick =()=>{
    location.href= './play.html'
}
  
phrase=["omg,You are a good typist." , "I like your typing Speed." , "Amazing Speed.",
 "So beautiful So Amazing just typing like a wow."]
  
 function generateRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
  }


 const storage = parseInt(localStorage.getItem("score"));
 const getData = (localStorage.getItem("username"));

 const phrasing = generateRandomWord(phrase);

var message = document.getElementById("displayscore")
message.innerHTML = phrasing + " Your Score is " + storage ;


const background =new Audio('./Assets/assets_bgm.mp3')
  background.play();
  background.loop =true 