function ExecutarSorteio() {
    var numeroDaSorte = prompt("Qual é o seu numero da sorte:");
    var numeroCerto = Math.round(Math.random() * 10);

    var userNumber = parseInt(numeroDaSorte);

    if (userNumber > 10 || userNumber < 0) {
        alert("Seu numero da sorte não pode ser maior que 100 ou menor que 0.");

        ExecutarSorteio();
    }

    if (numeroDaSorte == numeroCerto) {
        paragrafoResultado.innerHTML = "O numero sorteado foi:<br>" + numeroCerto + '<br>O seu numero foi:<br>' + numeroDaSorte + "<br>Você ganhou!";
        paragrafoResultado.style.backgroundColor = "#0F8";
        paragrafoResultado.style.color = "#FFF";
        paragrafoResultado.style.fontWeight = "bolder";
    } else {
        paragrafoResultado.innerHTML = "O numero sorteado foi:<br>" + numeroCerto + "<br>O seu numero foi:<br>" + numeroDaSorte + "<br>Não foi dessa vez... Tente novamente.";
        paragrafoResultado.style.backgroundColor = "#F08";
        paragrafoResultado.style.color = "#FFF";
        paragrafoResultado.style.fontWeight = "bolder";
    }
}
