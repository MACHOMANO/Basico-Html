const usuario = {
    nome:"asd",
    senha:"123"
}

function login() {
    let tentativaSenha = document.getElementById("senha").value;
    let tentativaNome = document.getElementById("nome").value;
    
    if ((usuario.nome == tentativaNome ) && (usuario.senha == tentativaSenha)) {
        window.location.href = "outra.html"
    } else {
        document.getElementById("nome").value = "";
        document.getElementById("senha").value = "";    
        alert("Nao autenticado")
    }
    
}

function mostrar() {
    document.getElementById("mostrarNome").innerHTML = usuario.nome;
    document.getElementById("mostrarSenha").innerHTML = usuario.senha;
}