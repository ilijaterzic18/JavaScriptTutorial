let submit = function () {
    let text = document.getElementById("note").value;
    let noteDiv = document.getElementById("noteDiv");
    let newDiv = document.createElement("div");
    let newPar = document.createElement("p");
    let newButDel = document.createElement("button");
    let newButView = document.createElement("button");

    newDiv.style.border = "2px solid white";
    newDiv.style.margin = "5px 5px 5px 5px";
    newDiv.style.position = "relative";

    newButDel.innerHTML = "Delete";
    newButDel.style.color = "white";
    newButDel.style.backgroundColor = "purple";

    newButView.innerHTML = "View";
    newButView.style.position = "absolute";
    newButView.style.right = "0";
    newButView.style.bottom = "0";
    newButView.style.color = "white";
    newButView.style.backgroundColor = "purple";

    newPar.innerHTML = document.getElementById("note").value;

    let izbrisi = function () {
        newDiv.remove();
    }

    let prikazi = function () {
        let popup = document.createElement("div");
        let popupText = document.createElement("p");
        let closePopup = document.createElement("button");

        // OVO GLEDAJ ZA KLASE
        // popup.classList.add("ime klase");
        popupText.innerHTML = newPar.innerHTML;
        popupText.style.color = "white";
        popupText.style.position = "absolute";
        popupText.style.top = "50%";
        popupText.style.left = "50%";
        // popupText.style.backgroundColor = "red";

        closePopup.innerHTML = "ZATVORI";
        closePopup.style.position = "absolute";
        closePopup.style.bottom = "0";
        closePopup.style.right = "0";
        closePopup.style.backgroundColor = "purple";
        closePopup.style.color = "white";

        popup.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        // popup.style.backgroundColor = "white";
        popup.style.width = "500px";
        popup.style.height = "500px";
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        // popup.style.top = "0";
        // popup.style.bottom = "0";
        // popup.style.left = "0";
        // popup.style.right = "0";
        // popup.style.position = "fixed";
        // popup.style.display = "block";

        popup.appendChild(popupText);
        popup.appendChild(closePopup);
        document.body.appendChild(popup);
        console.log(popup);

        // let zatvoriPopup = function () {
        //     document.body.removeChild(popup);
        // }

        closePopup.addEventListener("click", () => document.body.removeChild(popup));
    }

    newButDel.addEventListener("click", izbrisi);
    newButView.addEventListener("click", prikazi);

    noteDiv.appendChild(newDiv);
    newDiv.appendChild(newPar);
    newDiv.appendChild(newButDel);
    newDiv.appendChild(newButView);
}

document.getElementById("addNote")
    .addEventListener("click", submit);