import React from 'react';

// Essa primeira linha é a linha de importação da biblioteca React, do conteudo react para que possamos trabalhar dentro desse arquivo.
// Toda vez que colocamos um código aqui ele vai consultar isso lá dentro da biblioteca React.

// Feito a importação, precisamos dar início a criação da função do nosso aplicativo. Por boa prática, o nome dessa função tem O MESMO NOME do arquivo.
export default function App() {

  // Podemos também fazer concatenações entre variáveis e as PROPS
  
  return (
    // Essa função precisa retornar alguma coisa para quem fez a chamada dessa função. Para quem está fazendo o uso dessa função ela precisa retornar alguma coisa.
    // Todo o conteúdo dentro do retun é chamado de JSX. É uma extensão que nos permite trabalhar com HTML, CSS, JavaScript tudo em um bolo só para exportar tudo de uma vez também.
    // Dentro desse código, sempre que queremos usar al uma forma de enviarmos informações para um determinado componente.
    // Podemos enviar valores, padrões, constantes, funções para um componente filho usando os atributos do componente 
    // capturando pelo PROPSguma expressão do JavaScript devemos utilizar as {}
    // Começando a trabalhar com PROPS. Basicamente é
    // Como enviamos dados para um componente? Bom,basicamente precisamos ir para o componente e colocarmos dentro dos parenteses da função e dizer que ele irá utilizar props.
    // Depois, precisamos criar os nomes dos atributos junto do chamamento do componente aqui no JavaScript. Nesse caso os nomes não precisam ser iguais ao que temo lá no componente, pois são os nomes dos atributos. Porém lá, ao usarmos o valor desses atributos, precisamos usar os mesmos nomes definidos para os componentes.
    <>
      <h1>Entendendo o funcionamento do React</h1>
      <h2>Aplicando estilos com CSS no React</h2>
      <p>Vamos tentar fazer o uso de estilos utilizando o CSS aqui dentro do React</p>
    </>
    // Um detalhe importante que precisa ser observado é que só podemos retorar um componente. Se tentarmos exportar uma div ele vai dar erro. Não podemos retornar / exportar mais de um componente. Todos os componentes que temos no app precisam vir dentro deste único componente representado acima pelos sinais de menor e maior. 
    // Outro detalhe é que não podemos ter tags não finalizadas dentro do react. No HTML5 não somos obrigados a colocar a barra finalizadora para indicar o fim do componente, porém, no React isso é uma OBRIGAÇÃO. Quando o comando não tem uma tag de fechamento precisamos colocar a mesma para que não tenhamos problemas.
    // Outro detalhe importante dentro do React. Podemor retornar por exemplo um componente section sem problemas, porém, algumas vezes não queremos retornar um componente específico, quremos apenas um componente de bloco com vários outros componentes dentro, ai nesse exemplo acima não precisaríamos de uma tag section. Ele consideraria os simbolos de menor e maior como delimitadores de componente, início e fim de um bloco de componentes. Então ele funcionaria da mesma forma.
  )
}

// E, aqui ao final, temos a exportação efetivamente de nosso app.
// export default App()
// Podemos exportar diretamente ali na função onde retornamos todo o conteúdo do app, dessa forma estamos retornando e exportando de  uma vez só, tornando isso mais prático.