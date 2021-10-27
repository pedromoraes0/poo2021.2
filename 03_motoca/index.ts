class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    toString(): String {
        return this.name + " tem " + this.age + " anos ";

    }
}

// testes da classe Person:

// let jp = new Person("jp", 21);
// console.log(jp.toString());

class Motorcycle {
    
    person: Person | null;
    power: number;
    time: number;

    constructor(power: number){
        this.power = power;
        this.time = 0;
        this.person = null;

    }

    // Comprar tempo:
    buy(time: number): void {
        this.time += time;

    }

    // Dirigir:
    drive(time: number): boolean{
       if(this.person == null){
           console.log("Está vazia!");
           return false;
       }
        
        if(this.person.age > 10){
           console.log("Idade superior a indicada para o uso do brinquedo!");
           return false;
       }
        
        if(this.time == time){
           console.log("Tempo inuficiente");
           return false;
       } 
        this.time -= this.time
            return true;
//           console.log("andou" + this.time + "min");
//       }

    }

    // Buzinar:
    honk(): string {
        let saída = "P";
        for(let i = 0; i < this.power; i++)
            saída += "e";
        return saída + "m";

    }

    // Por pessoa na moto, se estiver sem ninguém
    in(person: Person): boolean {
       if (this.person === null){
           this.person = person;
           return true;
       }
       console.log("Não há mais espaço na Motoca!")
        return false;
    }

    // Retirar pessoa da moto, se houver alguém
    out(): Person | null {
        if(this.person == null) {
            console.log("Não há ninguém na Motoca!")
            return null;
        }
        const person = this.person;
        this.person = null;
        return person;

    }

    toString(): string {
        if(this.person != null)
            return `[ ${this.person}]`
        return "Está vazia!";

    }

}

// testes da classe Motorcycle:

// let moto = new Motorcycle(7);
// console.log(moto.honk());
// moto.in(new Person("Enzo", 1));
// moto.out();

// let valentina: Person | null = moto.out();
// console.log("" + valentina);

// if(moto.in(new Person("Alice", 23)))
//     console.log("Alice está na Motoca!");

// else
//     console.log("Alice não conseguiu subir na Motoca!");

// let motorcycle = new Motorcycle();
// console.log(motorcycle.toString());

