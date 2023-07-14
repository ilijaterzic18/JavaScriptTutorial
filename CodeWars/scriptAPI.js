let anime = document.getElementById("inputAnime");
let character = document.getElementById("inputCharacter");
let quote = document.getElementById("inputQuote");
let btnGenerate = document.getElementById("generator");

btnGenerate.addEventListener("click", function () {
    fetch("https://animechan.vercel.app/api/random", { method: "GET" })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error("Fejlovo si brt");
            }
        })
        .then(data => {
            console.log(data);
            return data;
        })
        .then(data => {
            anime.value = data.anime;
            character.value = data.character;
            quote.value = data.quote;
        })
        .catch(error => {
            console.log(error);
        })
});
// https://github.com/public-apis/public-apis

// horoskop: https://aztro.readthedocs.io/en/latest/


fetch("file.json",
{
    method: "GET",
    
})
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error("Kurcina");
        }
    })
    .then(data => {
        console.log(data);
        // eval(data.ispisi);
        // let funkcija = new Function(data.ispisi);
        // funkcija();
    })
    .catch(error => {
        console.log(error);
    });
