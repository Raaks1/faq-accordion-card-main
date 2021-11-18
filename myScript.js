

/*let button = document.getElementById("knapp");
let question = document.getElementById("quest")
button.addEventListener('click', function() {
  document.getElementById("question").style.fontWeight = "700";
  
});*/
/*var acc = document.getElementsById("btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {    
    this.classList.toggle("active");*/


    /*if (button.classList.toggle === "active") {
      button.style.fontWeight = "700";
    } else {
      button.style.fontWeight = "400";
    }*/
    

/* if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else this.classList.add("active");*/
    let button = document.getElementById("knapp");
    let x = document.getElementById("answer1");
    button.addEventListener("click", showAnswer())
function showAnswer() {
    
    let button = document.getElementById("knapp");
    console.log(x.style.display)
    if (x.style.display === "none") {
      x.style.display = "block";
      button.style.fontWeight = "700";
    } else {
      x.style.display = "none";
      button.style.fontWeight = "400";
    }
    
      
   

    
  }
  
  


  function answerShow() {
    let x = document.getElementById("answer2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  function showTheAnswer() {
    let x = document.getElementById("answer3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  function showingAnswer() {
    let x = document.getElementById("answer4");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function showAnswers() {
    let x = document.getElementById("answer5");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    
  }

  
  /*parentNode/? classList/className?*/

/*const question = document.querySelectorAll(".question");
const answer = doc.querySelectorAll("answer1");

  question = document.querySelectorAll("click",() => {
      
    if(answer.style.display === "none") {
        answer.style.display = "block";

     } else {
         answer.style.display = "none";
     }

     });*/