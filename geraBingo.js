const divInfo = document.getElementById("info");

var qtdNumeros=90;
var numCartelasGeradas = 0;
function gerarCartela() {
    let divCartela=document.createElement("div");
    divCartela.classList.add("cartela");
    let numerosCartela=[];
    let etapaLetra=0;
    while (numerosCartela.length<25) {
        //let novoNumero=numerosCartela.length+1;
        var numeroConfirmado=false;
        var novoNumero=0;
        while (!numeroConfirmado) {
            switch (etapaLetra) {
                case 0: novoNumero=Math.floor(Math.random()*20)+1; break;
                case 1: novoNumero=20+Math.floor(Math.random()*20)+1; break;
                case 2: novoNumero=40+Math.floor(Math.random()*10)+1; break;
                case 3: novoNumero=50+Math.floor(Math.random()*20)+1; break;
                case 4: novoNumero=70+Math.floor(Math.random()*20)+1; break;
            }
            if (numerosCartela.indexOf(novoNumero,0)==-1) {
                numeroConfirmado=true;
            }
        }
        numerosCartela.push(novoNumero);
        if (numerosCartela.length%5==0) {
            etapaLetra++;
        }
    }
    numerosCartela.sort(function (a,b) {
        if (parseInt(a)>parseInt(b)) {
            return 1;
        }
        if (parseInt(a)<parseInt(b)) {
            return -1;
        }
        return 0;
    })
    for (let i=0; i<25; i++) {
        if (i%5==0) {
            let novaLetra="";
            switch (i) {
                case 0: novaLetra="B"; break;
                case 5: novaLetra="I"; break;
                case 10: novaLetra="N"; break;
                case 15: novaLetra="G"; break;
                case 20: novaLetra="O"; break;
            }
            divCartela.appendChild(gerarLetra(novaLetra));
        }
        var divNovoNumero=document.createElement("div");
        if (i==12) {
            divNovoNumero.innerHTML="&star;";
            divNovoNumero.classList.add("estrela");
        } else {
            divNovoNumero.innerHTML=numerosCartela[i];
        }
        divCartela.appendChild(divNovoNumero);
    }
    document.body.appendChild(divCartela);
    console.log("Pronto!");
	numCartelasGeradas++;
	divInfo.innerHTML=numCartelasGeradas+" cartelas geradas nesta página.";
}
function gerarCartelas() {
    for (let i=0; i<100; i++) {
        gerarCartela();
    }
}
function gerarLetra(argLetra) {
    var divNovaLetra=document.createElement("div");
    divNovaLetra.classList.add("letra");
    divNovaLetra.innerHTML=argLetra;
    return divNovaLetra;
}