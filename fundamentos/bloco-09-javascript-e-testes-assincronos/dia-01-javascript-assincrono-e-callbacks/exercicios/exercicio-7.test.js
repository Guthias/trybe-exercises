const uppercase = require('./exercicio-7');

describe('Implementando casos de teste para o Bloco 9 Dia 1 Exercicio 7', () => {
  it('Verifica a função retorna a String passada como parametro como maiuscula', (done) => {
    uppercase('guthias', (result) => {
      try {
        expect(result).toBe('GUTHIAS');
        done();
      } catch (error) {
        done(error);
      }
    });
  })
})
