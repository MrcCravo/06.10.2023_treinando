console.log("Iniciando novos treinos");
console.log("treinando");
console.log("mais uma vez");
console.log("faça isso novamente")

alert("bem vindo ao treino do dia de hoje");
alert("esse é um arquivo para treino");
let nome = prompt("me diga seu nome");

if (nome === "marco") {
    alert("seu nome é lindo");
    console.log(nome);
} else {
    alert("mude seu nome para marco");
}

let corPreferida = prompt("qual a sua cor preferida?");

if (corPreferida === "vermelho") {
    alert("você é flamengo");
} else{
    alert("não sei qual o seu time");
    console.log("não sei qual o seu time");
}

let idade = prompt("qual sua idade?");

if (idade >= 18) {
    alert("você já pode dirigir");
    console.log("você já pode dirigir");
    console.log("você já pode ter uma habilitação");
} else {
    alert("você é apenas uma criança");
    console.log("você é apenas uma criança");
    console.log("você deveria estar em casa");
}

let dogName = prompt("qual o nome do seu cachorro?");

if (dogName === "caramelo") {
    alert("esse nome não é criativo");
    alert("mas é um ótimo nome");
    console.log("eu gostaria de ter um caramelo");
    console.log("eu quero comprar seu cachorro");
}

alert("vamos continuar nossa conversa");

let numeroDeFilhos = prompt("quantos filhos você tem?");

if (numeroDeFilhos >= 3) {
    alert("você é um procriador");
    console.log(`Essa pessoa tem ${numeroDeFilhos} filhos`);
    console.log("você deveria parar de ter filhos pois o mundo já possui muitas pessoas");
} else {
    console.log(`Você tem ${numeroDeFilhos} filhos, esse é um número bom de filhos levando em consideração o cenário atual`);
    alert(`Você tem ${numeroDeFilhos} filhos, esse é um número bom de filhos levando em consideração o cenário atual`);
}

let qualGradução = prompt("você cursou e concluiu qual graduação");

if (qualGradução === "direito") {
    console.log(`você passou 5 anos estudando para se formar em ${qualGradução}. Parabéns você percorreu um longo caminho`);
    alert(`você passou 5 anos estudando para se formar em ${qualGradução}. Parabéns você percorreu um longo caminho`);
} else {
    console.log("parabéns, ter uma graduação é um passo memorável");
    alert("parabéns, ter uma graduação é um passo memorável");
}
