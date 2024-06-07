import React, {useState} from 'react';
import Formulario from './componentes/Formulario';
import Elevacao from './componentes/elevacaoState';

// Para importar o CSS externo não utilizamos o padrão de importação visto anteriormente. Basicamente precisamos apenas colocar o import e o nome do arquivo. css. Não precisamos especificar um nome. Além disso, quando estamos trabalhando com um CSS externo para o React voltamos a utilzar o CSS normalmente, com a mesma sintaxe que sempre utilizamos.
import './App.css';

// Essa primeira linha é a linha de importação da biblioteca React, do conteudo react para que possamos trabalhar dentro desse arquivo.
// Toda vez que colocamos um código aqui ele vai consultar isso lá dentro da biblioteca React.

// Feito a importação, precisamos dar início a criação da função do nosso aplicativo. Por boa prática, o nome dessa função tem O MESMO NOME do arquivo.
export default function App() {

  // const [nome, setNome] = useState('Guguzinho Xablau');
  // const [carro, setCarro] = useState('Fiat Fastback');
  // const handleChangeNome = (e) => {
  //   setNome(e.target.value);
  // }


  // Outra forma de aplicarmos os estilos é utilizando constantes e aplicando-as depois dentro da classe style, como no exemplo abaixo

  // Para usarmos state precisamos criar uma variável const, o nome do estado ([num]) e junto a funlçao ([num,setNum])

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
    // ESTILIZAÇÃO. Assim como quando trabalhamos apenas com HTML e CSS, no React também podemos incluir estilos através das 3 formas já conhecidas, sendo elas inline, incorporado e externo. PORÉM, a documentação oficial do React sugere que demos a preferência ao uso de classes para estilização. Então, na maioria das vezes faremos o uso das classes seguindo a recomendação da documentação. Abaixo faremos os 3 estilos para relembrar.
    // PARTICULARIDADES: No CSS tradicional utilizamos o - para separarmos palavras compostas. No React, ao aplicarmos um estilo, usamos o padrão camelCase caso seja uma palavra composta em vez do -. Além disso, caso apliquemos mais de um estilo na mesma linha, por exemplo cor e fonte, separamos estes elementos utilizando a vírgula.
    // PARTICULARIDADES: Aqui no React não chamamos apenas class para chamarmos uma classe do CSS. Em vez disso utilizamos className e então o nome da classe que iremos aplicar o estilo.
    // PARTICULARIDADES: Quando vamos aplicar um estilo ao body, podemos fazer isso tanto criando um arquivo CSS externo dentro do public quanto podemos fazer inline.
    // RENDERIZAÇÃO DOS COMPONENTES EM REACT: Um dos motivos do React ter um bom desempenho é que ele só renderiza os elementos que sofreram alterações. 
    // STATE: Basicamente é um elemento que armazena valores de propriedades que pertencem ao componente. Quando esses objetos tem seu estado alterado, esses objetos são renderizados novamente. Isso não ocorre com variáveis comuns. Usamos o STATE quando precisamos associar um valor da tela com uma variável de forma que quando mudarmos o valor dessa variável nós precisemos também que esse valor seja mostrado, renderizado. Antigamente só se podia usar STATES em componentes de classe, mas, com o implemento de rooks na linguagem, agora podemos usar STATE em componentes funcionais. Se a alteração de uma variável ocorre em programação ela não é mostrada, e é ai que entra o STATE. Quando criamos um botão e colocamos que ao clicar o valor de n1 se tornará aquele, não será alterado na tela, não será renderizado. 
    // EVENTOS: Não tem muita diferença quando trabalhamos com HTML puro para o React. A ideia é a mesma.
    // FORMULÁRIOS: Um pouco diferente do HTML. Fazemos o uso do STATE. Basicamente, podemos criar um STATE para cada elemento do formulário ou um STATE recebendo uma lista de elementos. Precisamos associar o elemento do formulário a um STATE para que possamos inserir esse valor e usa-lo em outro lugar do aplicativo
    <>
      {/* <label>Digite seu Nome:</label><br></br>
      <input 
        type='text' 
        name='fnome'
        value={nome} // Associamos ao STATE que queremos utilizar
        onChange={(e) => setNome(e.target.value)} // Associamos a função de manipulação do STATE usando uma arrow function para chamar a função. E o parâmetro que a função recebe é o value, pois por mais que ele tenha o STATE atribuido, ele se altera conforme digitamos no input e depois, usamos o atributo do nchange (e) para que ele possa puxar o valor do value para a função setNome. Dessa forma capturamos o que foi digitado e passamos para o STATE
      /><br></br>
      <label>Selecione um carro:</label><br></br>
      <select value={carro} onChange={(e) => setCarro(e.target.value)}>
        <option value='Fiat Uno'>Fiat Uno</option>
        <option value='Fiat Toro'>Fiat Toro</option>
        <option value='Fiat Fastback'>Fiat Fastback</option>
        <option value='Fiat Cronos'>Fiat Cronos</option>
      </select><br></br>
      <p>Nome Digitado: {nome}</p>
      <p>Carro Selecionado: {carro}</p> */}
      <Elevacao/>
    </>
    // Um detalhe importante que precisa ser observado é que só podemos retorar um componente. Se tentarmos exportar uma div ele vai dar erro. Não podemos retornar / exportar mais de um componente. Todos os componentes que temos no app precisam vir dentro deste único componente representado acima pelos sinais de menor e maior. 
    // Outro detalhe é que não podemos ter tags não finalizadas dentro do react. No HTML5 não somos obrigados a colocar a barra finalizadora para indicar o fim do componente, porém, no React isso é uma OBRIGAÇÃO. Quando o comando não tem uma tag de fechamento precisamos colocar a mesma para que não tenhamos problemas.
    // Outro detalhe importante dentro do React. Podemor retornar por exemplo um componente section sem problemas, porém, algumas vezes não queremos retornar um componente específico, quremos apenas um componente de bloco com vários outros componentes dentro, ai nesse exemplo acima não precisaríamos de uma tag section. Ele consideraria os simbolos de menor e maior como delimitadores de componente, início e fim de um bloco de componentes. Então ele funcionaria da mesma forma.
  )
}

// E, aqui ao final, temos a exportação efetivamente de nosso app.
// export default App()
// Podemos exportar diretamente ali na função onde retornamos todo o conteúdo do app, dessa forma estamos retornando e exportando de  uma vez só, tornando isso mais prático.