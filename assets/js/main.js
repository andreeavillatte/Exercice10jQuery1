$(document).ready(function () {
    //si je clique sur le bouton
    $('#button').click(function () {
    // on ajoute une classe seulement au troisième paragraphe avec "addClass" 
    $('#thirdText').addClass('hide');
    // Et on relance le hide pour cacher le nouvel élément
    $('.hide').hide();
    });
});