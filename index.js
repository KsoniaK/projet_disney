//AU SCROLL FAIRE APPARAITRE LA BARRE DE NAVIGATION DU HAUT

// REMARQUE: ICI ON DEMANDE AUX DEUX FONCTIONS DE S'ACTIVER AU MOMENT DU SCROLL
window.onscroll = function() {scrollFunction(), scrollFunctionBis()};

//CREATION DE LA FONCTION
function scrollFunction() {
    // QUAND L'UTILISATEUR SCROLL VERS LE BAS A 20PX DU HAUT DE LA PAGE, FAIRE APPARAITRE LA NAV
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.top = "0";
  } else {
      //ICI ON CACHE LA NAV
    document.getElementById("nav").style.top = "-63px";
  }
}

//-------------------------------------------------------------------------------------------------------------

//AU SCROLL FAIRE APPARAITRE LA BARRE DE NAVIGATION DU BAS

//CREATION DE LA FONCTION
function scrollFunctionBis() {
    // QUAND L'UTILISATEUR SCROLL VERS LE BAS A 20PX DU HAUT DE LA PAGE, FAIRE APPARAITRE LA NAV
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav_bas_page").style.bottom = "0";
  } else {
      //ICI ON CACHE LA NAV
    document.getElementById("nav_bas_page").style.bottom = "-80px";
  }
}