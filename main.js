const buttonsConfig = [
  {
    btn: document.getElementById('btn-kick'),
    damageBtn: 20,
  },
  {
    btn: document.getElementById('btn-custom-hit'),
    damageBtn: 50,
  }
];

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-character'),
  elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-enemy'),
  elProgressbar: document.getElementById('progressbar-enemy'),
}

function setButtons(buttons) {
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].btn.addEventListener('click', function () {
      changeHP(random(buttons[i].damageBtn), character, buttons);
      changeHP(random(buttons[i].damageBtn), enemy, buttons);
    })
  }
}

function init() {
  console.log('Start Game!');

  setButtons(buttonsConfig);
}

function renderHp(person) {
  renderHPLife(person);
  renderProgressbarHP(person);
}

function renderHPLife(person) {
  person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
  person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person, buttons) {
  if(person.damageHP < count) {
    person.damageHP = 0;
    alert('Бедный '+ person.name + ' проиграл бой!');

    for(let i = 0; i < buttons.length; i++) {
      buttons[i].btn.disabled = true;
    }
  } else {
    person.damageHP -= count;
  }


  renderHp(person);
}

function random(num = 20) {
  return Math.ceil(Math.random() * num);
}

init();
