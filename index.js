//classes são de dados, os dados, são chamados de instâncias, podem ser variáveis e/ou métodos, que são funções
//conta de usuarios em um banco
const ano =2023
class Usuario  {
  nome;
  idade;
  sexo;
  saldo;
  anoNascimento;
  temConta;
  

}
 
const kuro = new Usuario();
kuro.nome = "Kuro";
kuro.idade=24;
kuro.sexo="masculino";
kuro.anoNascimento = ano - kuro.idade;
kuro.temConta=true;
const l = new Usuario();
l.nome="Lawliet";
l.idade=17;
l.sexo="masculino";

l.anoNascimento = ano - l.idade;
l.temConta=false;



//conta do kuro
if (kuro.temConta===true) {
  kuro.saldo =18890.00
   console.log(`Oi ${kuro.nome}, seu saldo ${kuro.saldo}`);
}else{
  console.log(`por favor, crie uma conta em nosso banco, pois não há saldo :(`);
}
if (kuro.idade>=18 && kuro.temConta===false) {
   console.log(`tem idade para criar uma conta`);
} else if(kuro.temConta===false && kuro.idade < 18){
   console.log(`infelizmente não tem idade para criar uma conta :(`);
}
//conta do lawliet
if (l.temConta===true) {
  l.saldo =100.00
   console.log(`Oi ${l.nome}, seu saldo ${l.saldo}`);
}else{
  console.log(`por favor, crie uma conta em nosso banco, pois não há saldo :(`);
}
if (l.idade>=18 && l.temConta===false) {
   console.log(`tem idade para criar uma conta`);
} else if(l.temConta===false && l.idade < 18){
   console.log(`infelizmente não tem idade para criar uma conta :(`);
}




console.log(kuro);
console.log(l);
//construtores, são agrupamentos de instância  
//personagens de death note 
class DeathNote {
  constructor (nome, idade, habilidade){
    this.nome= nome;
    this.idade=idade;
    this.habilidade=habilidade;
  }
}
const light = new DeathNote("light yagami",23,"kira");
const detetiveL = new DeathNote("L",27,"melhor detetive do mundo");
console.log(light);
console.log(detetiveL);



