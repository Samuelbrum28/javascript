const filmes = ["interestelar","o protetor","o contador","jhon wick","invocação do mal",]

console.log(filmes)

function InserFinalArray(){
    var novofilme = prompt("Digite um filme")
    
    filmes.push(novofilme)
    console.log(filmes)
    alert(filmes.length)

}
function IncerirInicioArry(){
    var novofilme = prompt("Digite o filme")

    filmes.unshift(novofilme)
    console.log(novofilme)
    alert(filmes.length)
}

function RemoverFinalArry(){
    var novofilme
       
    filmes.pop(novofilme)
    console.log(novofilme)
    alert(filmes.length)

}
function RemoverInicioArry(){
    var novofilme
    filmes.shift(novofilme)
    console.log(novofilme)
    alert(filmes.length)
}
/*function Listagemconsole(){
for(i = 0 ; i<filmes.length; i++){
  filme = filmes[i]
 console.log(filme)

 }
}*/

/*function ListarArry(){

    for (1=0; i< filmes.length; i ++){
        filme = filmes[i]
        console.log(filme)

    }
}*/



