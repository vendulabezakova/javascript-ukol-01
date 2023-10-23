//https://kodim.cz/vyvoj-webu/js1/lekce/retezce-podminky/ulozky-na-doma/fit-email
const email = {
    firstName: prompt("Křestní jméno:"),
    lastName: prompt("Příjmení:"),
}

document.body.innerHTML += "<h2>Nová e-mailová adresa pro uživatele " + email.firstName + " " + email.lastName + " je:</h2>"

document.body.innerHTML += "<p>" + (email.lastName.trim().slice(0,5)+email.firstName.trim().slice(0,3)).toLowerCase() + "@fit.cvut.cz</p>"

