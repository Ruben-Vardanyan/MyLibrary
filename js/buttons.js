const dropdown_button = document.querySelector("#dropdown-button");
const dropdown_button_mini = document.querySelector("#dropdown-button-mini");

const dropdown = document.querySelectorAll(".dropdown");
const button_arrow = document.querySelectorAll(".button-arrow");

const inputField = document.getElementById("searchInput1");

let opened = false
open_dropdown = () =>{
    for (let i = 0; i < 2; i++) {
        dropdown[i].classList.toggle("show");
        button_arrow[i].classList.toggle("rotater");
    }
    if(opened) opened = false
    else opened = true
}  


dropdown_button.addEventListener("click", open_dropdown);

dropdown_button_mini.addEventListener("click", open_dropdown);


const burger = document.querySelector(".burger");
const nav = document.querySelector(".mini-menu");
const navLinks = document.querySelector(".nav-links ");

let isMenuOpened = false

burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    burger.classList.toggle("phoneMin");
    
    if(opened){
        open_dropdown()
    }
    if(isMenuOpened) isMenuOpened = false
    else isMenuOpened = true
    console.log(isMenuOpened)
});




inputField.addEventListener("focus", () => {
    if(isMenuOpened) {
        navLinks.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
        burger.classList.toggle("phoneMin");
        
        if(opened){
            open_dropdown()
        }
        isMenuOpened = !isMenuOpened    
    }
});