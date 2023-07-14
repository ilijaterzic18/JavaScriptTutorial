let dodaj = function () {
    if (document.getElementById("add").value!="") {
        let div = document.getElementById("addedItems");

        let addedDiv = document.createElement("div");
        let txtField = document.createElement("input");
        let newButton = document.createElement("button");

        txtField.type = "text";
        txtField.placeholder = "Add Text!";
        txtField.readOnly = true;
        txtField.style.width = '200px';
        txtField.value = document.getElementById("add").value;

        newButton.innerHTML = "REMOVE";

        div.appendChild(addedDiv);
        addedDiv.appendChild(txtField);
        addedDiv.appendChild(newButton);

        let obrisi = function () {
            div.removeChild(addedDiv);
        }

        newButton.addEventListener("click", obrisi);
    } else {
        alert("Unesi tekst!");
    }
    // let p = document.createElement("p");
    // p.textContent = "NOVI TEKST";
    // p.style.color = "aqua";
    // p.style.textAlign = "center";
    // div.appendChild(p);
}
document.getElementById("addItem").addEventListener("click", dodaj);
