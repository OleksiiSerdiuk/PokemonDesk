const buttonsConfig = [
  {
    btn: document.getElementById('btn-kick'),
    damageBtn: 20,
    countClick: 0,
    returnCount: document.querySelector('#btn-kick .clicks-left span'),
    maxClickBtn: 6,
  },
  {
    btn: document.getElementById('btn-custom-hit'),
    damageBtn: 50,
    countClick: 0,
    returnCount: document.querySelector('#btn-custom-hit .clicks-left span'),
    maxClickBtn: 1,
  }
];

export default buttonsConfig;
