const buttonsConfig = [
  {
    btn: document.getElementById('btn-kick'),
    damageBtn: 20,
    returnCount: document.querySelector('#btn-kick .clicks-left span'),
  },
  {
    btn: document.getElementById('btn-custom-hit'),
    damageBtn: 50,
    returnCount: document.querySelector('#btn-custom-hit .clicks-left span'),
  }
];

export default buttonsConfig;
