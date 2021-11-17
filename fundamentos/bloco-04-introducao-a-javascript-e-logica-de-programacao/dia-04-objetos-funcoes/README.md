# Javascript - Objetos e funçõess (Bloco 4 Dia 4)

## Conteudos do Dia
Os conteudos que apresentados no dia foram

- Como utilizar objetos
- Como fazer um array de objetos
- Identação `kebab-case` (Não é recomendado utilizar)
- Como utilizar o `for / in` para percorrer Chaves
- Como utilizar `function()` para reaproveitar trechos do código

## Exercicios

### Objetos e For-in

Para os exercicios de 1 a 5 deveriamos utilizar o objeto

```
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
```

1. Imprimir uma mensagem de boas vindas com o nome do personagem
2. Acrescentar a propriedade 'info' e o valor 'sim' no objeto
3. Utilizando o `for/in` exibir todas as chaves do objeto
4. Utilizando o `for/in` mostrar todos os valores das chaves do objeto
5. Criar um novo array para obter como resultado no console
```
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes
```

Para os proximos Exercicios utilizamos um novo objeto

```
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
```
6. Acessar os valores do objeto para imprimir a segunite mensagem utilizando o `console.log()`
```
O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos
```
7. Adicionar um novo livro favorito com os seguintes valores
```
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
}
```

8. Acessar as informações do objeto para imprimir no console a seguinte mensagem 
```
Julia tem 2 livros favoritos 
```

### Funções
1. Criar uma função que retorna `true` ou `false` caso o parametro seja um [Palíndromo](https://pt.wikipedia.org/wiki/Pal%C3%ADndromo)
2. Criar uma função que retorna o indice de maior valor de um `Array`
3. Criar uma função que retorna o indice de menor valor de um `Array`
4. Criar uma função que recebe um array de nomes e retorna o nome com maior número de caracteres
5. Criar uma função que recebe um array de numeros e retorna o numero que mais se repetiu
6. Crar uma função que recebe um numero (N) e retorna a soma de todos os numeros de 1 até N
7. Criar uma função que recebe duas strings como parametro e retorna `true` caso a segunda string seja o final da primeira e `false` caso contrário