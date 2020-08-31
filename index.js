//AU SCROLL FAIRE APPARAITRE LA BARRE DE NAVIGATION DU HAUT

// REMARQUE: GRACE A window.onscroll ON DEMANDE AUX DEUX FONCTIONS DE S'ACTIVER AU MOMENT DU SCROLL
window.onscroll = function() {scrollFunction(), scrollFunctionBis()};

//CREATION DE LA FONCTION
function scrollFunction() {
    // QUAND L'UTILISATEUR SCROLL VERS LE BAS A 20PX DU HAUT DE LA PAGE, FAIRE APPARAITRE LA NAV
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.top = "0";
  //  TEST: DONNER UNE OPACITE A LA NAV AVC BOUTON OPACITE 1 (CSS) POUR LAISSER BOUTON VISIBLE AVANT SCROLL: ECHECCCCC!
  //  document.getElementById("nav").style.opacity = "0";
  } else {
      //ICI ON CACHE LA NAV A -68PX TOP
    document.getElementById("nav").style.top = "-68px";
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
      //ICI ON CACHE LA NAV A -80PX
    document.getElementById("nav_bas_page").style.bottom = "-80px";
  }
}