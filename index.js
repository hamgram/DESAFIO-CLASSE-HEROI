//Declaração do Modulo Readline. Há outras formas de fazê-lo

const readline = require('readline')
const rl = readline.createInterface({ //nesta linha cria-se a constante rl que servirá para acessar o readline
    input: process.stdin,
    output: process.stdout
})



//Classe para heroi de uma aventura contendo nome, idade e tipo

class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    //Criar uma função "Atacar" que exiba a msg: "O {tipo} atacou usando {ataque}"
   
    atacar(){

        let ataque = "desespero"

        if (this.tipo == "mago") {
            ataque = "magia"
        }else if (this.tipo == "guerreiro") {
            ataque = "espada"
        }else if (this.tipo == "monge") {
            ataque = "artes marciais"
        }else if (this.tipo == "ninja") {
            ataque = "shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
    
}

function definirHeroi(){
    return new Promise( ( resolve, reject ) => {
        rl.question( 'Diga-me o seu nome herói? ', ( nome ) => {
            rl.question( 'Hummm... E qual a sua idade? ', ( idade ) => {
                rl.question( 'E que tipo de herói você é? ', ( tipo ) => {
                    let personagem = new heroi(nome, idade, tipo)
                    resolve (personagem)
                    })
                })
            })
        })
    }



definirHeroi().then( personagem => { 
    personagem.atacar()
    
    rl.close()
})
