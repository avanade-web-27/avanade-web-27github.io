const aereasNacional = [
    "Latam",
    "Gol",
    "Azul",
];

const [latam, gol, azul] = aereasNacional

const airCompanies = [...aereasNacional, 
    "Delta",
    "United", 
    "AirLines",
    "Emirates",
];

const [latam, gol, azul, ...internacionais]

console.log(airCompanies);

const user = {
    name:"Rafaela Carvalho",
    email:"rafaela.sims@gmail.com",
    password: "jhsgbajdgba"
}

const {password, ...data } = user;

console.log("Oh meu Deus", data);
