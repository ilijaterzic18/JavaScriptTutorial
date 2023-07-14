function otvori() {
    let karta = document.getElementsByClassName("card");
    let brojOtvorenih = izbroj();

    for (let i = 0; i < karta.length; i++) {
        karta[i].addEventListener("click", function (e) {
            e.target.querySelector("img").style.display = "block";
            if (izbroj() === 2) {
                let prvi = undefined;
                let drugi = undefined;
                for (let i = 0; i < karta.length; i++) {
                    if (karta[i].querySelector("img").style.display == "block") {
                        if (prvi === undefined) {
                            prvi = karta[i].querySelector("img");
                        } else {
                            drugi = karta[i].querySelector("img");
                        }
                    }
                }
                if (prvi.src === drugi.src) {
                    console.log("TACNO!");
                    document.getElementById("pokusaji").innerHTML++;
                    document.getElementById("poeni").innerHTML++;
                    for (let i = 0; i < karta.length; i++) {
                        if (prvi.id === karta[i].querySelector("img").id
                            || drugi.id === karta[i].querySelector("img").id) {
                            setTimeout(function () {
                                karta[i].style.display = "none";
                            }, 1000);
                        }
                    }
                } else {
                    console.log("NETACNO!");
                    document.getElementById("pokusaji").innerHTML++;
                    setTimeout(function () {
                        prvi.style.display = "none";
                        drugi.style.display = "none";
                    }, 1000);
                }
            }
            if (izbroj() === 3) {
                for (let i = 0; i < karta.length; i++) {
                    karta[i].querySelector("img").style.display = "none";
                }
            }
        })
    }
}

function izbroj() {
    let karte = document.getElementsByClassName("card");
    let brojac = 0;
    for (let i = 0; i < karte.length; i++) {
        if (karte[i].querySelector("img").style.display === "block") {
            brojac++;
        }
    }
    return brojac;
}

let zatvoriKarte = function () {
    let karta = document.getElementsByClassName("card");
    for (let i = 0; i < karta.length; i++) {
        karta[i].querySelector("img").style.display = "none";
    }
}

document.getElementById("dugme")
    .addEventListener("click", zatvoriKarte);

otvori();

