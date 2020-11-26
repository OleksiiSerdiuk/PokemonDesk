class Selectors {
  constructor(name) {
    this.elHP = document.getElementById(`health-${name}`);
      this.elProgressbar = document.getElementById(`health-${name}`);
  }
}

class Pokemon extends Selectors {
  constructor({ name, hp, selectors}) {
      super(selectors);

      this.name = name;
      this.defaultHP = hp;
      this.damageHP = hp;
      this.damageHP = hp;
      this.renderHp();
  }

  changeHP = (count, person, buttons) => {
    this.damageHP -= count;

    if(this.damageHP <= 0) {
      this.damageHP = 0;
      alert('Бедный '+ this.name + ' проиграл бой!');

      for(let i = 0; i < buttons.length; i++) {
        buttons[i].btn.disabled = true;
      }
    }

    this.renderHp();
  }

  renderHp = () => {
    this.renderHPLife();
    this.renderProgressbarHP();
  }

  renderHPLife = () => {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
  }

  renderProgressbarHP = () => {
    this.elProgressbar.style.width = this.damageHP + '%';
  }
}

export default Pokemon;
