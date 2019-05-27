window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    document.querySelector("#pil").addEventListener("click", dropDown);

}

/*******MENU******/

/*** her har jeg indsat en burger menu, med en toggle funtion******/

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.getElementById("menuknap").src = "assets/Menu.svg";
    } else {
        document.getElementById("menuknap").src = "assets/No.svg";
    }
}

function dropDown() {
    console.log("dropdown");
    document.querySelector("#dropdown").classList.toggle("hidden");

    let erSkjult = document.querySelector("#dropdown").classList.contains("hidden");

    if (erSkjult == true) {
        document.getElementById("pil").src = "assets/down arrow small.svg";
    } else {
        document.getElementById("pil").src = "assets/pilup.svg";
    }
}
