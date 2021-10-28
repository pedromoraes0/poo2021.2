class Criança {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    toString(): string {
        return this.nome + " tem " + this.idade + " anos ";

    }
}


class Trem {
    
    pessoas: Array<Criança>;
    potencia: number;
    tempo: number;
    lotaçao: number;

    constructor(potencia: number, lotaçao: number){
        this.potencia = potencia;
        this.pessoas = new Array<Criança>();
        this.tempo = 0;
        this.lotaçao = lotaçao;
        

    }

    // Comprar tempo:
    comprarTempo(tempo: number): void {
        this.tempo += tempo;

    }

    // Dirigir:
    dirigir(tempo: number): boolean{
       if(this.pessoas.length == 0){
           console.log("O tem está vazio!");
           return false;
       }
        
        if(this.pessoas[0].idade < 5){
           console.log("Idade inferior a indicada para dirigir o brinquedo!");
           return false;
       }
        
        if(this.tempo < tempo){
           console.log("Tempo inuficiente");
           return false;
       } 
        this.tempo -= tempo
            return true;

    }

    // Buzinar:
    buzina(): string {
        let saída = "P";
        for(let i = 0; i < this.potencia; i++)
            saída += "e";
        return saída + "m";

    }

    // Por pessoa no trem, se estiver sem ninguém
    subir(pessoa: Criança): boolean {
        if (this.pessoas.length === this.lotaçao){
            console.log("O trem está cheio!")
            return false;
        }
        this.pessoas.push(pessoa);
        return true;

    }

    // Retirar pessoa do trem, se houver alguém
    descer(): Criança | null {
        if(this.pessoas.length == 0) {
            console.log("Não há ninguém na Trem!")
            return null;
        }

        let criança = this.pessoas.shift();
        if(criança === undefined)
            return null;
        return criança;
        
        }


    // [{João, 4}, {Sara, 10}, {Ana, 5}]
    // (João) [Sara Ana]

    toString(): string {
        if(this.pessoas.length == 0) {
            return "O trem está vazio!"
        }

        let saída = `(${this.pessoas[0].nome}) [ `;
        for (let i = 1; i < this.pessoas.length; i++) {
            saída += `${this.pessoas[i].nome} `;

        }
        return saída + "]";

    }

}



// testes da classe Trem:

let trem = new Trem(5, 4);
trem.subir(new Criança("Enzo", 5));
trem.subir(new Criança("Valentina", 4));
trem.subir(new Criança("Davi", 3));
trem.subir(new Criança("Luna", 2));
trem.subir(new Criança("Ivy", 1));
console.log(trem.toString());

trem.comprarTempo(5);
console.log(trem.buzina());
console.log(trem.dirigir(5));
console.log(trem.toString());
console.log(trem.descer);
console.log(trem.toString());
console.log(trem.descer);
console.log(trem.toString());

