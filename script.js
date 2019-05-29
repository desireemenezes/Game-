   
let contador;
let tentativasRealizadas;
let numeroAleatorio;

    
window.onload = inicializaGame = () => {

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    contador = 1;
    tentativasRealizadas = "";
    
    console.log(numeroAleatorio)
    console.log(contador)

    $("#tentativas").innerHTML = tentativasRealizadas;
    $("#numeroDigitado").val();
    $("#resultados").innerHTML = "";
    
}

const verificaPalpite = () => {
    let ultimoNumerodigitado = $("#numeroDigitado").val();
    ultimoNumerodigitado = parseInt(ultimoNumerodigitado);
    
    const isValid = (num) => num === '' || num === null || isNaN(num) || num < 1 || num > 100;
    
    if(isValid(ultimoNumerodigitado)) {
        alert("Favor digitar um número válido");   
        return false;

    } else {  
        tentativasRealizadas += ultimoNumerodigitado + " ";
        console.log(tentativasRealizadas)
        $("#tentativas").html(tentativasRealizadas);
    }

    if (ultimoNumerodigitado == numeroAleatorio) {
        $('#ganhou').show();
        $('#dicaBaixa').hide();
        $('#dicaAlta').hide();
    
        alert('Jogar Novamente?');
        window.location.reload();

    } else if (ultimoNumerodigitado > numeroAleatorio) {
        $('#dicaAlta').show();
        $('#dicaBaixa').hide();
        $('#ganhou').hide();
    
    } else { 
        $('#dicaBaixa').show();
        $('#dicaAlta').hide();
        $('#ganhou').hide();
    } 
       
    contador === 10 ? (alert("FIM DO JOGO! Você perdeu!"),iniciaJogo()) : contador ++;
}


