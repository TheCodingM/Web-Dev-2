let teachersbutton = document.getElementsByClassName("teachers"); 
let websiteimage = document.getElementById("image1"); 
let votedtext = document.getElementById("h2id"); 
let date = document.getElementById("date"); 
let votesh2 = document.getElementById("votes");
var SelectSound = new Audio("selected.mp3"); 

function loop() { 
    date.textContent = Date(); 
    setTimeout(function() {loop()}, 200) 
} 
loop();

function removeButtons(list) { 
    len = list.length; 
    for (let i = 0; i < len; i++) { 
        list[0].remove(); 
    } 
} 

// function to handle button clicks
function hej(num){ 
    switch(num){ 
        case 1: 
            websiteimage.classList.add("image"); 
            websiteimage.src = 'Efa.png'; 
            votedtext.textContent = "You voted for Efa Mushtaq!"; 
            removeButtons(teachersbutton); 
            SelectSound.play(); 
            break; 
        case 2: 
            websiteimage.classList.add("image"); 
            websiteimage.src = 'Erica.png'; 
            votedtext.textContent = "You voted for Erica Nordmark!"; 
            removeButtons(teachersbutton); 
            SelectSound.play(); 
            break; 
        case 3: 
            websiteimage.classList.add("image"); 
            websiteimage.src = 'Christer.png'; 
            votedtext.textContent = "You voted for Christer Lidén!"; 
            removeButtons(teachersbutton); 
            SelectSound.play(); 
            break; 
        case 4: 
            websiteimage.classList.add("image"); 
            websiteimage.src = 'Jessika.png'; 
            votedtext.textContent = "You voted for Jessika Rödin!"; 
            removeButtons(teachersbutton); 
            SelectSound.play(); 
            break; 
        case 5: 
            websiteimage.classList.add("image"); 
            websiteimage.src = 'Mark.png'; 
            votedtext.textContent = "You voted for Mark Olson!"; 
            removeButtons(teachersbutton); 
            SelectSound.play(); 
            break; 
        case 6: 
            websiteimage.classList.add("image"); 
            websiteimage.src = 'Hilary.png'; 
            votedtext.textContent = "You voted for Hilary Adam Jones!"; 
            removeButtons(teachersbutton); 
            SelectSound.play(); 
            break;  
    } 
}
