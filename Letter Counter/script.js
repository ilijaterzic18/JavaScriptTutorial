let izbroj = function () {
    let input = document.getElementById("txtInput").value;
    let display = document.getElementById("counter");
    console.log(display.value);
    display.innerHTML = input.length;
}

let show = document.getElementById("prikaziSadrzaj");
let unos = document.getElementById("txtInput")
    .addEventListener("keyup", izbroj);
show.addEventListener("click", izbroj);
