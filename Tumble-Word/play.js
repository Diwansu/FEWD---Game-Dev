var inputElementID = document.getElementById("InputWord");
 var scoreElementID =document.getElementById('score');
 var gameBody = document.getElementById("game-body"); 

 var score = 0;
 let arrWords = [];
let arrWordsDiv = [];
 


const DICTIONARY = [
    'colonel',
    'cajole',
    'onomatopoeia',
    'rhinoceros',
    'javascript',
    'nauseous',
    'computer',
    'kalvium',
    'categorize',
    'conduct',
    'assumption',
    'hippopotamus',
    'environmentalism',
    'insignificance',
    'beneficiary',
    'authority',
    'exaggerate',
    'formulation',
    'conscience',
    'accidentally',
    'grammar',
    'schedule',
    'guarantee',
     'phenomenon'];

setInterval(() => {
    drawWord();
}, 2000)
 
//  I use concept of https://github.com/toyamarodrigo to drawWord and makeWord here.However I applied some animation effect and modified as
//  per the need . 


function drawWord() {
    const word = generateRandomWord(DICTIONARY);
    arrWords.push(word);
    let wordDiv = document.createElement('div');
    wordDiv.innerHTML = `<p>${word}</p>`;
    wordDiv.classList.add('word');
    wordDiv.style.zIndex = '2';
    wordDiv.style.transform = `translateX(${getRandomInt(0,90)}%)`
    wordDiv.addEventListener("animationend", () => {
      if (arrWords.includes(word)) {
        let indexWord = arrWords.indexOf(word);
        let wordDivIndex = arrWordsDiv[word];
        arrWords.splice(indexWord, 1);
        arrWordsDiv.splice(indexWord, 1);
      }
        wordDiv.remove();
        
    })
  
    arrWordsDiv.push(wordDiv);
    gameBody.appendChild(wordDiv);
  }
  
  



  function generateRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
  }

  function getWord() {
    let inputValue = inputElementID.value.toLowerCase();
    inputElementID.value = '';
    if (arrWords.includes(inputValue)) {
      updateScore();
      let indexWord = arrWords.indexOf(inputValue);
      let wordDivIndex = arrWordsDiv[indexWord];
      arrWords.splice(indexWord, 1);
      arrWordsDiv.splice(indexWord, 1);
      wordDivIndex.parentNode.removeChild(wordDivIndex);
    } else{
      location.href ='./gameover.html';
    }}


    function updateScore() {
       score+=1 ;
        localStorage.setItem("score",score);
        scoreElementID.innerText = score;
        const pointSound = new Audio ('./Assets/positive_beeps-85504.mp3') ;
        pointSound.play();
      }

          document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                getWord();
            } })


      function getRandomInt (min,max) {
        min = Math.ceil(min);
        max= Math.floor(max);
        return Math.floor(Math.random()*(max-min))+min ;


        //The maximum is exclusive and the minimum is inclusive. 
    }
       var seconds=70 ;
    var timer=setInterval(()=>{
      document.getElementById('timer').textContent=seconds
      seconds--
      if(seconds==0){
          clearInterval(timer)
          location.href ='./gameover.html'
      }
  },1000) 
    
   
