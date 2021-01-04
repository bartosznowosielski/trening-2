const age = 32
console.log(age);

const button = document.querySelector('.action--js');

console.log(button);

const klikanie = () => {
    const zmiana = document.querySelector(".change--js");
    zmiana.innerHTML = `Niespodzianka!`
}

button.addEventListener('click', klikanie);

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
});