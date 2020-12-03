import Pokemon from './src/js/pokemon.js'
import countBtn from './src/js/countBtn.js'
import { random, generateLog } from './src/js/utils.js'
import reset from './src/js/resetBtn.js';
import Backend from './src/js/backend.js';

const backend = new Backend();
const $control1 = document.querySelector('.control.player1');
const $control2 = document.querySelector('.control.player2');

class Game {
  start = async () => {
    const pokemons = await backend.getPokemons();
    const pikachu = pokemons.find(item => item.name === 'Pikachu');
    console.log('pokemons', pokemons);

    const randomEnemy = await backend.getPokemon();
    console.log('randomEnemy', randomEnemy);

    const player1 = new Pokemon({
      ...pikachu,
      selectors: 'player1',
    })

    const player2 = new Pokemon({
      ...randomEnemy,
      selectors: 'player2',
    })

    function attackPersons(person, element) {
      return function () {
        person.attacks.forEach(item => {
          const $btn = document.createElement('button')
          $btn.classList.add('button')
          $btn.innerText = item.name
          const btnCount = countBtn(item.maxCount, $btn,)
          $btn.addEventListener('click', () => {
            btnCount()
            person.changeHP(random(20), function (count) {
              console.log('Some change after change Hp', count)
              console.log(generateLog(person, person, count))
            })
            if(person.hp.current === 0) {
              reset();
            }
          })
          element.appendChild($btn)
        })
      }
    }

    const firstPlayer = attackPersons(player1, $control1)
    const secondPlayer = attackPersons(player2, $control2)
    firstPlayer()
    secondPlayer()
  }
}

const game = new Game();
game.start();
