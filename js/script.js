let emails = ['marco@mail.it', 'francesco@mail.it'];
const btn = document.getElementById('check');

btn.addEventListener('click', function () {

    let user_email = document.getElementById('email').value;
    let check_mail = false;


    for (let i = 0; i < emails.lenght; i++) {
        if (emails[i] == user_email) {
            check_mail = true;
        }
    }

    if (check_mail) {
        console.log('Mail trovata benvenuto');
    }
    else {
        console.log('Mail non trovata');

    }
})