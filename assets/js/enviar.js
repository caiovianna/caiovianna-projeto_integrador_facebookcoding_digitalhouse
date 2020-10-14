function Enviar() {

    var nome = document.getElementById("nome");

    if (nome.value != "") {
        alert('Obrigado pela mensagem ' + nome.value + '! Vamos te responder em breve!');
    }

}