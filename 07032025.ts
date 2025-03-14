interface Usuario {
    nome: string;
    idade: number;
    email?: string;
}
const usuario1: Usuario = {
    nome: "Pedro",
    idade: 20
};

const usuario2: Usuario = {
    nome: "Maria",
    idade: 19,
    email: "maria.mariaaa@gmail.com"
};

// EXERCICIO 1: 

interface Carros {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

const meuCarro: Carros = {
    marca: "Volvo",
    modelo: "XC40",
    ano: 2023,
    motor: "2.0"
};

console.log("Marca:", meuCarro.marca);
console.log("Modelo:", meuCarro.modelo);
console.log("Ano:", meuCarro.ano);
if (meuCarro.motor) {
    console.log("Motor:", meuCarro.motor);
}

// EXERCICIO 2: 

interface Multiplicacao {
    (a: number, b: number): number;
}

const multiplicar: Multiplicacao = (a, b) => a * b;

console.log("Multiplicação 2 * 3:", multiplicar(2, 3));
console.log("Multiplicação 5 * 4:", multiplicar(5, 4));
console.log("Multiplicação 7 * 0:", multiplicar(7, 0));

// EXERCICIO 3: 

function inverterArray<T>(array: T[]): T[] {
    return array.slice().reverse();
}

const numeros = [1, 2, 3, 4, 5];
const strings = ["a", "b", "c", "d"];

console.log("Array de números invertido:", inverterArray(numeros));
console.log("Array de strings invertido:", inverterArray(strings));

// EXERCICIO 4: 

interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

interface Usuario1 {
    nome: string;
    email: string;
}

class UsuarioRepositorio implements Repositorio<Usuario1> {
    private usuarios: Usuario1[] = [];

    salvar(dado: Usuario1): void {
        this.usuarios.push(dado);
    }

    obterTodos(): Usuario1[] {
        return this.usuarios;
    }
}

const repo = new UsuarioRepositorio();
repo.salvar({ nome: "Alice", email: "alice@example.com" });
repo.salvar({ nome: "Bob", email: "bob@example.com" });

console.log("Usuários cadastrados:", repo.obterTodos());

// EXERCICIO 5: 

type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log("Resposta do servidor:", resposta);
    } else if (typeof resposta === "boolean") {
        console.log("Operação bem-sucedida:", resposta);
    }
}

processarResposta("Sucesso ao salvar os dados.");
processarResposta(false);

// EXERCICIO 6: 

interface Estudante {
    nome: string;
    curso: string;
}

interface Trabalhador {
    empresa: string;
    cargo: string;
}

type EstudanteTrabalhador = Estudante & Trabalhador;

const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Pedro",
    curso: "Engenharia de Software",
    empresa: "Foursys",
    cargo: "Desenvolvedor Júnior"
};

console.log("Estudante Trabalhador:", estudanteTrabalhador);

