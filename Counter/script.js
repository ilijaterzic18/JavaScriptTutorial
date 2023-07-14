let povecaj = function() {
    document.getElementById('counter').innerHTML++;
}
let smanji = function() {
    document.getElementById('counter').innerHTML--;
}

document.getElementById('plus').addEventListener('click', povecaj);
document.getElementById('minus').addEventListener('click', smanji);