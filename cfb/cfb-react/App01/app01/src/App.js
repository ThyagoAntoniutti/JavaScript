import React from 'react' 
// essa primeira linha é a linha de importação da biblioteca React,
// do conteudo react para que possamos trabalhar dentro desse arquivo
// Toda vez que colocamos um código aqui ele vai consultar isso lá dentro
// da biblioteca React

// feito a importação, precisamos dar início a criação da função do nosso aplicativo
// por boa prática, o nome dessa função tem O MESMO NOME do arquivo.
export default function App() {
  return (
    // essa função precisa retornar alguma coisa para quem fez a chamada dessa função, 
    // para quem está fazendo o uso dessa função ela precisa retornar alguma coisa
    <>
    <section>
      <p>Aprendendo React (essa ***** ai)</p>
      <p>Eu não queria estar aprendendo isso, definitivamente achei uma *****.</p>
      <p>Fazia tempo que não sentia tanto desgosto por alguma coisa.</p>
      <p>Espero que melhore no decorrer do tempo de aprendizado.</p>
      <p>P.S.: Esse teclado "novo" ficou sensacional, uma das melhores experiências de digitação que já tive. Preciso comprar um reserva para o caso de este aqui der algum problema futuramente. Outra opção também é comprar um teclado full size para programar e utilizar o 65% para uso pessoal. Mas, simplesmente perfeito. Só queria compartilhar minha felicidade com isso. Agora vamos voltar a aprender a porcaria do React</p>
    </section>
    </>
    // Um detalhe importante que precisa ser observado é que só podemos retorar um componente.
    // Se tentarmos exportar uma div ele vai dar erro. não podemos retornar / exportar mais de 
    // um componente. Todos os componentes que temos no app precisam vir dentro deste único 
    // componente representado acima pelos sinais de menor e maior. 
    // Outro detalhe é que não podemos ter tags não finalizadas dentro do react. No HTML5 não 
    // somos obrigados a colocar a barra finalizadora para indicar o fim do componente, é uma opção
    // porém, no React isso é uma OBRIGAÇÃO. Quando o comando não tem uma tag de fechamento precisamos
    // colocar a mesma para que não tenhamos problemas.
    // Outro detalhe importante dentro do React. Podemor retornar por exemplo um componente section sem problemas. 
    // Porém algumas vezes não queremos retornar um componente específico, quremos apenas um componente de bloco com 
    // vários outros componentes dentro, ai nesse exemplo acima não precisariamos de uma tag section. Ele consideraria
    // os simbolos de menor e maior como delimitadores de componente, início e fim de um bloco de componentes. Então
    // ele funcionaria da mesma forma.
  )
}

// e aqui ao final, temos a exportação efetivamente de nosso app
// export default App()
// podemos exportar diretamente ali na função onde retornamos todo o conteúdo do app
// dessa forma estamos retornando e exportando de  uma vez só, tornando mais prático