$(document).ready(function() {
    $('#galeria').magnificPopup({
        delegate: 'a', // Seleciona os links dentro do contêiner #galeria
        type: 'image',
        gallery: {
            enabled: true // Ativa a navegação entre imagens
        },
        closeBtnInside: true // O botão "X" para fechar ficará dentro do popup
    });
});