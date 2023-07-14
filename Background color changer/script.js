let dugme = document.getElementById('btn');
let fun1 = function () {
    console.log('Hello!');
    if (document.body.style.backgroundColor == 'blue') {
        //console.log(document.body.style.backgroundColor==='white');
        document.body.style.backgroundColor = 'white';
    } else {
    document.body.style.backgroundColor = 'blue';
    }
};

let combobox = document.getElementById('boje');

let funBoja = function() {
    let boja = combobox.value;
    console.log(boja);
    document.body.style.backgroundColor = boja;
}

//dugme.addEventListener('click', fun1);
combobox.addEventListener('change', funBoja);