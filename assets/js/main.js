//var nome; //hoisting - icar.

//console.log(nome, " chamando a variavel usando o var");

//const nome = "Avanade";
///////////////////////////////////////////////////////

/**
 * Existem 7 tipos de erros em JavaScript
 * -------------------------
 * SyntaxError - Escreveu alguma coisa errado.
 * ReferenceError - Chamou alguem que nao existe.
 * TypeError - Erro do tipo e uma violacao do javascript 
 * EvalError - Evite o uso do comeando eval, mas se ele for invalido
 * RangerError - Erro de intervalo, loop infinito, ou chamadas inumeras de recursividade
 * URIError - Erro referente a chamadas externas. Uniforme Resource Identifier. httpswww.
 * InternalError - Erro interno do JavaScript, falta de memoria, processador...
 * 
 */


escreve("Museu do Ipiranga");
//funcao nominal.
function escreve(x) {
    console.log(x);
}


function mudaTitulo(novoTitulo){
    document.querySelectot("h1").innerHTML = "<i>" + novoTitulo + "</i>";
}
mudaTitulo("Vai Flamengo")

//expressao de funcao - function expression
//funcao anonima - que nao tem nome.
const mudaTitulo2 = function(target, novoTitulo){
    document.querySelector("h2").innerHTML = novoTitulo;
};

mudaTitulo("h2", "Trocando subtitulo");


const relogio = () =>{
    const date = newDate();
    mudaTitulo2("h2", date.tolocaleTimeString());
};
setInterval(relogio, 1000);



const exemplo = (x) => console.log(x);

const frse = [
    "Um banco para 20 milhoes de pessoas",
    "C6 Bank o seu banco",
    "Cartao de credito sem anuidade",
];


const mudaFrase = (target, frase, tempo)=>{
    let total = 0;
    setInterval(() => {
        document.querySelector(target).innerHTML = frases[total >= frases.length - 1 ?(total = 0) :(total += 1)];
        console.log(total);
    }, tempo * 1000);
};
// condicao?verdade:falso
mudaFrase("h1", frases, 4);