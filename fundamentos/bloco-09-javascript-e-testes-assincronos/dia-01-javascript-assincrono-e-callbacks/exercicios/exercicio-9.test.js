const { getPokemonDetails } = require('./exercicio-8');

describe('A função getPokemonDetails', () => {
  
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    function callback(error, messsage) {
      expect(error).toEqual(expectedError);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Piplup', callback);
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    const expectedMessage = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
    function callback(error, messsage) {
      expect(messsage).toEqual(expectedMessage);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
});