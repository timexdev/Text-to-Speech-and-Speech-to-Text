speakBtn.addEventListener('click', ()=>{
    if('speechSynthesis' in window){
        var message = new SpeechSynthesisUtterance();
        var voices = speechSynthesis.getVoices();


        message.text = document.getElementById('text').value;
        message.voice = voices[2];
        message.volume = 1;
        message.rate = 1;
        message.pitch = 2;
        message.lang = "en-US";
        window.speechSynthesis.speak(message);
    }else{
        alert("Your Browser does not support speech synthesis !!!")
    }
    

})

speechBtn.addEventListener('click', ()=>{
    var SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(event){
        console.log(event);
        document.getElementById('converted').innerHTML += " " + event.results[0][0].transcript;

        // this will allow the user to say the background color the want on sp
        // body.style.backgroundColor = event.results[0][0].transcript;
    }
    recognition.onspeechend = function(){
        recognition.stop();
    }
})


colorBtn.addEventListener('click', ()=>{
    var SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // recognition.continuous = true;
    // recognition.interimResults = false;
    // recognition.maxAlternatives = 1;
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(event){
        // console.log(event);

        // this will allow the user to say the background color the want on sp
        body.style.backgroundColor = event.results[0][0].transcript;
    }
    recognition.onspeechend = function(){
        recognition.stop();
    }
})


// function to play and pause audio with javascript
// var music = new Audio('https://www.w3schools.com/tags/horse.ogg')

// function playAudio(){
//     music.play();
//     music.loop = true;
// }

// const pauseAudio = () =>{
//     music.pause();
// }


// USED THIS TO PRACTICE JAVASCRIPT WEB LINK AS REPLACEMENT OF HTML ANCHOR(a) TAG.
// const googleLink = () =>{
//     window.location.href = "https:/google.com"
// }




// function speak(){
//     var message = new SpeechSynthesisUtterance();
//     var voices = speechSynthesis.getVoices();


//     message.text = document.getElementById('text').value;
//     message.voice = voices[2];
//     message.volume = 1;
//     message.rate = 1;
//     message.lang = "en-US";
//     window.speechSynthesis.speak(message)

// }