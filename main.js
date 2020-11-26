function $getElById(id) {
  return document.getElementById(id);
}

const $conclusionLogs = document.querySelector('#logs');
const $p = document.createElement('p');

const buttonsConfig = [
  {
    btn: $getElById('btn-kick'),
    damageBtn: 20,
    countClick: 0,
    returnCount: document.querySelector('#btn-kick .clicks-left span'),
    maxClickBtn: 6,
  },
  {
    btn: $getElById('btn-custom-hit'),
    damageBtn: 50,
    countClick: 0,
    returnCount: document.querySelector('#btn-custom-hit .clicks-left span'),
    maxClickBtn: 1,
  }
];

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: $getElById('health-character'),
  elProgressbar: $getElById('progressbar-character'),
  changeHP,
  renderHp,
  renderHPLife,
  renderProgressbarHP,
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: $getElById('health-enemy'),
  elProgressbar: $getElById('progressbar-enemy'),
  changeHP,
  renderHp,
  renderHPLife,
  renderProgressbarHP,
}

function setButtons(buttons) {
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].btn.addEventListener('click', function () {
      character.changeHP(random(buttons[i].damageBtn), buttons);
      enemy.changeHP(random(buttons[i].damageBtn), buttons);
      clickCounter(buttons[i]);
    })
  }
}

function clickCounter(button) {
  ++button.countClick;

  if (button.countClick >= button.maxClickBtn) {
    button.btn.disabled = true;
  }
  addCount(button);
}

function addCount(button) {
  button.returnCount.innerText = `${button.maxClickBtn - button.countClick}`;
}

function init() {
  console.log('Start Game!');

  character.renderHp();
  enemy.renderHp();
  setButtons(buttonsConfig);

  // If the logs are not defined, then it is hidden
  if($conclusionLogs.innerHTML.length === 0) {
    $conclusionLogs.style.display = 'none';
  }
}

function renderHp() {
  this.renderHPLife();
  this.renderProgressbarHP();
}

function renderHPLife() {
  this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
  this.elProgressbar.style.width = this.damageHP + '%';
}

function changeHP(count, person, buttons) {
  this.damageHP -= count;

  const log = this === enemy ? generateLog(this, character) : generateLog(this, enemy);

  // If the logs are defined, then it is visible
  if(log) {
    $conclusionLogs.style.display = 'block';
  }

  if(this.damageHP <= 0) {
    this.damageHP = 0;
    alert('Бедный '+ this.name + ' проиграл бой!');

    for(let i = 0; i < buttons.length; i++) {
      buttons[i].btn.disabled = true;
    }
  }

  this.renderHp();
}

function random(num = 20) {
  return Math.ceil(Math.random() * num);
}

function generateLog(firstPerson, secondPerson) {
  let renderHP = `${firstPerson.defaultHP - firstPerson.damageHP}` + ' ' + `[${firstPerson.damageHP} / ${firstPerson.defaultHP}]`;

  const logs = [
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. ${renderHP}`,
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. ${renderHP}`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. ${renderHP}`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. ${renderHP}`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${renderHP}`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. ${renderHP}`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. ${renderHP}`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника ${renderHP}`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. ${renderHP}`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. ${renderHP}`
  ];

  $p.innerText = logs[random(logs.length) - 1];

  return $conclusionLogs.insertBefore($p, $conclusionLogs.children[0]);
}

init();
