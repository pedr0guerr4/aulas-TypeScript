let mensagem: string = "Olá, TypeScript!";
console.log(mensagem)

let nome: string = "Pedro";
let idade: number = 20;
let ativo: boolean = true;

let notas: number[] = [8, 9, 10];
notas.push(7);
console.log(notas[0]); 

function soma(a: number, b: number): number {
    return a + b;
}
console.log(soma(5, 3)); 

// EXERCICIO 1:

let valores: number[] = [7,21,23];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);

// EXERCICIO 2:

function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}
console.log(mensagemPersonalizada("Pedro"));

// EXERCICIO 3:

class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro = new Carro("Mitsubishi", "Lancer", 2024);
console.log(carro.detalhes()); 


