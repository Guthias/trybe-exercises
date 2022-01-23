const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 10,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 11,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 15,
    status: 'Aprenderei'
  },
];

const Content = () => {
  return (
    conteudos.map((conteudo) => <div>
      <h3>Conteudo: {conteudo.conteudo}</h3>
      <p>Bloco: {conteudo.bloco}</p>
      <p>Status: {conteudo.status}</p>
    </div>)
  );
}

export default Content;