/*var nome = "Eduardo Amaral";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));
*/
function soma(n1, n2){
    return n1 + n2;
}

function validaidade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }
    else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade");
console.log(validaidade(idade));


//alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));