let amigos = [];

function exibirTitulo (tag, texto) {
    let campo = document.querySelector (tag, texto);
    campo.innerHTML = texto; 
}
exibirTitulo('h1', 'Amigo Secreto do Xas');


function adicionar (params) {
    let nomeAmigo = document.getElementById("nome-amigo");
    if (nomeAmigo.value == '') {
        alert("Você precisa preencher o campo dos amigos!");
        return;
    }
    
    if (amigos.includes(nomeAmigo.value)) {
        alert ('Você não pode colocar nomes iguais!')
        return; 

    }
    
    let lista = document.getElementById("lista-amigos");

    amigos.push (nomeAmigo.value);
    if (lista.textContent == '') {
        lista.textContent = nomeAmigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nomeAmigo.value;
    } 
    
    nomeAmigo.value = '';
}

function sortear () {
    if (amigos.length < 4) {
        alert ("Não é possível fazer um amigo secreto com menos de 4");
        return;
        
    }
    embaralha(amigos);
    
    let sorteio = document.getElementById("lista-sorteio");

    if (amigos.length == 0) {alert ('Você precisa preencher o campo dos amigos antes de fazer um sorteio!');

    }

    for (let i = 0; i < amigos.length; i++) {
        
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + `${amigos[i]}` + '-->' + `${amigos[0]}` + '<br>'
 } else {
    
        sorteio.innerHTML = sorteio.innerHTML + `${amigos[i]}` + '-->' + `${amigos[i + 1]}` + '<br>';

        }

    };
    
     
}


function embaralha(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const indiceAleatorio = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i]];
    }
}



function reiniciar (params) {
    amigos = [];
    lista = document.getElementById("lista-amigos").innerHTML = '';
    sorteio = document.getElementById("lista-sorteio").innerHTML = '';
}