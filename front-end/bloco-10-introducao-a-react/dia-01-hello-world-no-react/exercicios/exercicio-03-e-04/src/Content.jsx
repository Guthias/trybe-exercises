import './index.css'

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
    <div className='content-container'>
      {conteudos.map((conteudo) => <div className='content-card'>
        <h3>{conteudo.conteudo}</h3>
        <p>Bloco: {conteudo.bloco}</p>
        <p>Status: {conteudo.status}</p>
      </div>)}
    </div>
  );
}

export default Content;