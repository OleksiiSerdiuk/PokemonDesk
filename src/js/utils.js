export const random = (max,min = 0) => {
  const num = max - min;
  return Math.ceil(Math.random() * num) + min;
}

export const generateLog = (firstPerson, secondPerson, count) => {
  let renderHP = `${firstPerson.hp.current - firstPerson.hp.total}` + ' ' + `${count}`;
  const $conclusionLogs = document.querySelector('#logs');
  const $p = document.createElement('p');

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
