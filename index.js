//Declaração do Modulo Readline. Há outras formas de fazê-lo

const readline = require('readline')
const rl = readline.createInterface({ //nesta linha cria-se a constante rl que servirá para acessar o readline
    input: process.stdin,
    output: process.stdout
})



function definirNome(){
    return new Promise( ( resolve, reject ) => {
        rl.question( 'Qual seu nome? ', ( nome ) => {
            resolve( nome )
            })
        })
    }

function bomDia(nome){
    console.log("bom dia " + nome)
    rl.close()
}


definirNome().then( nome => { 
    bomDia(nome)
    rl.close()
})

