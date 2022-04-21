const menuChoices = document.getElementsByClassName("menu-choices")[0];
const menuDes = document.getElementsByClassName("menu-des")[0];
const menuButton = menuChoices.getElementsByClassName("menu-button");
const info = menuDes.getElementsByClassName("info");


for(let i=0; i<menuButton.length; i++) {
    menuButton[i].addEventListener("click", () => {
        menuChoices.getElementsByClassName("active")[0].classList.remove("active");
        menuButton[i].classList.add("active");    
        menuDes.getElementsByClassName("active")[0].classList.remove("active");
        info[i].classList.add("active");
    })
}
