var canva = document.querySelector('canvas');
var pincel = canva.getContext('2d');

// aqui definimos o tipo de preenchimento que estmaos escolhendo
// precisamos definir a cor antes de pintar, como se estivéssemos
// comprando a tinta antes de pintar um quarto
pincel.fillStyle = 'lightgray';

// preencha um retangulo. definimos as coordenadas iniciais 
// e as coordenadas que pintamos. precisamos respeitar as medidas
// definidas na tag canvas. se colocarmos valores maiores, eles não
// irão aparecer na tela
pincel.fillRect(0, 0, 600, 400);

pincel.fillStyle = '#0099DD';

pincel.fillRect(0, 0, 200, 400);

pincel.fillStyle = '#FF9933';

pincel.fillRect(200, 0, 200, 400);

pincel.fillStyle = '#A1C7E0';

pincel.fillRect(400, 0, 200, 400);

// agora vamos desenhar um triângulo

pincel.fillStyle = '#026E81';

// com beginPath escolhemos onde começará o caminho que será desenhado
pincel.beginPath();

// aqui definimos o ponto em que o pincel vai começar
pincel.moveTo(300, 200);

// e aqui definimos uma linha até uma posição especificada por nós
// os valores são definidos pelas posições de X e pela coordenada
pincel.lineTo(200, 400);
pincel.lineTo(400, 400);
pincel.fill();

pincel.fillStyle = '#00ABBD';
pincel.beginPath();
pincel.arc(300, 200, 50, 0, 2 * 3.14);
pincel.fill;
