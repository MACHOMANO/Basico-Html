function calcularvalores(){
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);
    var operacao = (document.getElementById('lista').value)
    var mostrar = document.getElementById('mostrar')

switch(operacao){
        
    case'soma': 
        resultado = numero1 + numero2;  
        console.log(resultado);
    break
    case 'sub':
        resultado = numero1 - numero2;
        console.log(resultado);
        break
    case 'mult':
        resultado = numero1 * numero2;
        console.log(resultado);
        break
    case 'divi':
        resultado = numero1 / numero2;
        console.log(resultado);
        break
    }
    mostrar.innerHTML = resultado;
}
