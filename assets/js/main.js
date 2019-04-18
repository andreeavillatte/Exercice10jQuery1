$(document).ready(function () {
    //si je clique sur le bouton
    $('#button').click(function () {
    // je donne aux paragraphes firstText et thirdText une bordure de 5 pixels, verte à pointillés ("5px green dashed")
    // il ne faut pas oublier de metre 'border' virgule et après le style
    // aussi, quand on veut donner le style aux plusieurs elements, il faut mettre entre quotes simple les elements, separés par une virgule
    $('#thirdText').addClass('hide');
    // Et on relance le hide pour cacher le nouvel élément
    $('.hide').hide();
    });
});