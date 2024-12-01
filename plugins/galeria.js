$(document).ready(function() {
    $('#galeria').magnificPopup({
        delegate: 'a', 
        type: 'image',
        gallery: {
            enabled: true 
        },
        closeBtnInside: true 
    });
});