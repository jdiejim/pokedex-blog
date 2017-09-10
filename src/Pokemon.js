class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.sprite = data.sprites.front_default;
    // this.type = data.type[0];    
  }
}

export default Pokemon;