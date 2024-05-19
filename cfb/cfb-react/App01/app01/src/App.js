import React from 'react';
import jim from './componentes/imgs/jim.jpg';
import dwight from './componentes/imgs/dwight.jpg'; 

// Essa primeira linha é a linha de importação da biblioteca React, do conteudo react para que possamos trabalhar dentro desse arquivo.
// Toda vez que colocamos um código aqui ele vai consultar isso lá dentro da biblioteca React.

// Feito a importação, precisamos dar início a criação da função do nosso aplicativo. Por boa prática, o nome dessa função tem O MESMO NOME do arquivo.
export default function App() {
  const canal = () => {
    return ('CFB Cursos');
  }

  function curso() {
    return 'Curso de React'
  }
  return (
    // Essa função precisa retornar alguma coisa para quem fez a chamada dessa função. Para quem está fazendo o uso dessa função ela precisa retornar alguma coisa.
    // Todo o conteúdo dentro do retun é chamado de JSX. É uma extensão que nos permite trabalhar com HTML, CSS, JavaScript tudo em um bolo só para exportar tudo de uma vez também.
    // Dentro desse código, sempre que queremos usar alguma expressão do JavaScript devemos utilizar as {}
    <>
      <header>
        <p>Aprendendo React (essa ***** ai) com o <strong>{canal()}</strong></p>
        <p>Eu não queria estar aprendendo isso, definitivamente achei uma *****.</p>
        <p>Fazia tempo que não sentia tanto desgosto por alguma coisa.</p>
        <p>Espero que melhore no decorrer do tempo de aprendizado do <strong>{curso()}</strong>.</p>
        <p>P.S.: Esse teclado "novo" ficou sensacional, uma das melhores experiências de digitação que já tive. Preciso comprar um reserva para o caso de este aqui der algum problema futuramente. Outra opção também é comprar um teclado full size para programar e utilizar o 65% para uso pessoal. Mas, simplesmente perfeito. Só queria compartilhar minha felicidade com isso. Agora vamos voltar a aprender a porcaria do React</p>
      </header>
      <section>
        <br/>
        <hr/>
        <br/>
        <p>Podemos também utilizar concatenações, assim como fazemos no JavaScript. Observe abaixo:</p>
        <p><strong>{"Canal: " + canal()}</strong></p>
        <p><strong>{"Curso: " + curso()}</strong></p>
        <p>São informaões básicas para entendermos quando utilizamos as chaves e como operamos dentro das chaves. Basta utilizarmos o conteúdo JavaScript da mesma forma que o fazemos como de costume, porém aqui dentro do React.</p>
        <br/>
        <hr/>
        <br/>
        <img src={jim} alt='Jim Halpert olhando através da persiana da janela do refeitório para Andy após pregar uma peça nele durante o episódio.'></img>
        <br/>
        <br/>
        <img src={dwight} alt='Dwight olhando desesperado pela persiana da janela da sala de conferências.'></img>
        <br/>
        <br/>
        <img src='/img/michael.png' alt='Michael Scott'></img>
        <br/>
        <br/>
        <hr/>
        <br/>
        <br/>
        
      </section>
    </>
    // Um detalhe importante que precisa ser observado é que só podemos retorar um componente. Se tentarmos exportar uma div ele vai dar erro. Não podemos retornar / exportar mais de um componente. Todos os componentes que temos no app precisam vir dentro deste único componente representado acima pelos sinais de menor e maior. 
    // Outro detalhe é que não podemos ter tags não finalizadas dentro do react. No HTML5 não somos obrigados a colocar a barra finalizadora para indicar o fim do componente, porém, no React isso é uma OBRIGAÇÃO. Quando o comando não tem uma tag de fechamento precisamos colocar a mesma para que não tenhamos problemas.
    // Outro detalhe importante dentro do React. Podemor retornar por exemplo um componente section sem problemas, porém, algumas vezes não queremos retornar um componente específico, quremos apenas um componente de bloco com vários outros componentes dentro, ai nesse exemplo acima não precisaríamos de uma tag section. Ele consideraria os simbolos de menor e maior como delimitadores de componente, início e fim de um bloco de componentes. Então ele funcionaria da mesma forma.
  )
}

// E, aqui ao final, temos a exportação efetivamente de nosso app.
// export default App()
// Podemos exportar diretamente ali na função onde retornamos todo o conteúdo do app, dessa forma estamos retornando e exportando de  uma vez só, tornando isso mais prático.