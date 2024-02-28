function trocarFundo () {
    var corPreto = '#000';
    document.body.style.backgroundColor = corPreto;
}

function filmeNovo (){
    var frase ="O Novo Filme é: O Mágico de Oz - 20:00 - hoje";

    var filme = document.getElementById ('novoFilme');
    if (filme) {
        novoFilme.textContent = frase;
        novoFilme.style.color = 'blue';
    }
}
filmeNovo ();

function alterarCor(){
    var h1 = document.getElementById('titulo');
    if(h1) {
        h1.style.color = '#fcb000';
    }
}
alterarCor();
