/*
  Do NOT uncomment the example lines of code below (rows 8-10), they will cause errors.  
  But I am providing it as a template.
  */


/* 
document.querySelector("ELEMENT").addEventListener("EVENT",function(){
     //YOUR CODE
 })
 */



// Problem 1

window.addEventListener("load", function(){
  let response = prompt("What is your favorite resturaunt?");
  console.log(response);
});

// Problem 2
document.querySelector("h1").addEventListener("click", function(){
  const element = document.querySelector("h1");
  element.remove();

});



// Problem 3
const images = document.querySelectorAll("img");
const image5 = images[4];
image5.addEventListener("dblclick", function(){
  image5.remove();

});



// Problem 4
// Part 1

const figcaps = document.querySelectorAll("figcaption");
const figcap1 = figcaps[0];
figcap1.addEventListener("mouseover", function(){
  figcap1.style.color = "purple";
  figcap1.style.borderStyle = "dashed";
  figcap1.style.borderColor = "green";
  figcap1.style.borderWidth = "7px 7px 7px 7px";

});



// Problem 4
// Part 2
figcap1.addEventListener("mouseout", function(){
  figcap1.style.color = "black";
  figcap1.style.border = "none";
  
});



// Problem 5
figcap1.addEventListener("focus", function(){
  figcap1.style.color = "purple";
  figcap1.style.borderStyle = "dashed";
  figcap1.style.borderColor = "green";
  figcap1.style.borderWidth = "7px 7px 7px 7px";
  
  });

figcap1.addEventListener("focusout", function(){
  figcap1.style.color = "black";
  figcap1.style.border = "none";
});

// Problem 6 (TO DO)
const figcap2 = figcaps[1]
figcap2.addEventListener("focus", function(){
  figcap1.style.font = "Papyrus";
  console.log("focus fig2");
  
  });
figcap2.addEventListener("focusout", function(){
  figcap1.style.font = "Times New Roman";
    
});


// Problem 7 (TO FIX)
document.getElementById("style").addEventListener("click", function(){
  console.log("style clicked");
  document.querySelector("div.container").setAttribute("class", "one-third");
  document.getElementById("maincontent").style.backgroundImage = "url('images/Purple-Haze.jpg')";

});




// Problem 8
const image9 = images[8];
document.getElementById("style2").addEventListener("click", function(){
  console.log("style2 clicked");
  if (image9.getAttribute("class") != "pizazz"){
    console.log("is pizazz");
    image9.setAttribute("class", "pizazz");
  }
  else{
    image9.removeAttribute("class");
    console.log("is not pizazz");
  }

});



// Problem 9