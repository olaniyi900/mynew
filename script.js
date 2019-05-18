let display = document.getElementsByClassName("one");
let photos = document.getElementsByClassName("photo");

for (let i = 0; i < photos.length; i++) {
     photos[i].addEventListener("mouseover",
      function () {
          display[0].src = photos[i].src;
      }
     );
    
}

// form scripting

let username = document.querySelector("#username");
let head = document.querySelector(".head");
let firstName = document.querySelector("#firstname");
let middleName = document.querySelector("#middlename");
let lastName = document.querySelector("#lastname");
let contact = document.querySelector("#contact");
let displayDiv = document.querySelector(".display");


let click = document.querySelector(".click");
click.addEventListener("click", play);

function play(event) {
    event.preventDefault()
    const user = username.value;
    let fName = firstName.value
    let fLetter = fName.slice(0,1).toUpperCase();
    let lLetters = fName.slice(1).toLowerCase();
    let mainName = fLetter + lLetters; 
    head.textContent = "Hello, " + mainName;

    let btn = document.createElement("button");
    btn.setAttribute("class","btnc");
    btn.textContent = "Reset";
    btn.style.borderRadius = "5px";
    btn.style.height = "40px";
    btn.style.border = "none";
    btn.style.width = "100px";
    btn.style.backgroundColor = "red";
    btn.style.color = "white";

    let add = document.createElement("address");
    let contactInvo = contact.value;
    add.innerHTML = "<p>We will contact you through this address</p><br>"+ contactInvo;
    let para = document.createElement("p");
para.textContent = "Thank you for register with us.";



    displayDiv.appendChild(para);
    displayDiv.appendChild(add);
    displayDiv.appendChild(btn);
    displayDiv.style.boxShadow = "2px 2px 3px #ccc";
    btn.addEventListener("click",clearDiv);
}



function clearDiv() {
   
   displayDiv.style.display = "none";
   
}

