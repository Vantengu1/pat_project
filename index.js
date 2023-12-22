const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
});

let data = prompt("Сколько тебе лет?");
if(data >= 18) {
     alert("Отлично выглядишь!");
 } else {
     alert("Мне кажется ещё рано.");
 }
 console.log(data);
