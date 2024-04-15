function calcularvalores(){
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);
    var operacao = (document.getElementById('operacao').value)

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
    Text.textcontent = resultado
}