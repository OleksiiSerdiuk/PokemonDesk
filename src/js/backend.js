class Backend {
  getPokemons = async() =>{
    const response = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
    return await response.json();
  }

  getPokemon = async() => {
    const response = await fetch('https://reactmarathon-api.netlify.app/api/pokemons?random=true');
    return await response.json();
  }

  getDamage = async() => {
    const response = await fetch('https://reactmarathon-api.netlify.app/api/fight?player1id=25&attackId=1&player2id=1');
    return await response.json();
  }
}

export default Backend;
