const resultado = document.querySelector("#resultado");

//arrow function nao acessa 'arguments'

let myFunc = {
    showArguments(){
        resultado.innerHTML = arguments;
        consople.log(arguments);
    }
}

myFunc.showArguments("BMW","AUDI", "MERCEDES", "BENTLEY", "FERRARI", "LAMBORGHINI");


let myFunc2 = {
    showArguments2: () => {
        resultado.innerHTML = arguments;
        consople.log(arguments);
    }
}

//myFunc.showArguments("Corsa","Escort", "Uno", "Santana", "Gol", "Fusca", "Kombi");


let user = {
name: "Rafaela Carvalho",
usandoArrow: () => {
    console.log(`Meu nome e ${this.name}, com Arrow Function.`);
    },

    
usandoNominal() {
    console.log(`Meu nome e ${this.name}, com Nominal Function.`);

    },
};    

user.usandoArrow();
user.usandoNominal();




let soma = (a,b) =>{
    console.log(a + b);
}
let soma2 = function(a,b){
    console.log(a +b);
};

new soma(50,20); //not constructor
new soma2(50,20);

const frases = [
    "Um banco para 20 milhões de pessoas", 
    "C6 Bank o seu banco", 
    "Cartão de crédito sem anuidade"
];
