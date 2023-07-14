(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clearBtn = document.querySelector('.red');
    let equalBtn = document.querySelector('.green');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
    //console.log(screen.value);
    equalBtn.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = '';
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clearBtn.addEventListener('click', function (e) {
        screen.value = ''
    }   )

})();