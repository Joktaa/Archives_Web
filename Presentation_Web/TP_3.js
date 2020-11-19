//FONCTION MOT DE PASSE
function Login(form) //prend le formulaire du mot de passe
{
  var password = form.password.value; //met l'entrée de l'utilisateur dans une variable

  if (password == 'ai4578jf') //vérifie si le mot de passe est le bon
  {
    window.location.href="bravo.html"; //change le fichier source de la page
  }
  else
  {
    alert("Mot de Passe Invalide ... "); //sinon prévient que le mot de passe est faux
  }
}

//FONCTION QUESTIONNAIRE
function Question(form) //prend le formulaire du questionnaire
{
  var html = form.cb_html.checked; //met en booléen si la checkbox est cochée
  var css = form.cb_css.checked;  //met en booléen si la checkbox est cochée
  var js = form.cb_js.checked; //met en booléen si la checkbox est cochée
  var texteR = document.getElementById('texteR'); //met dans une variable l'élement du texte à afficher
  var texteB = document.getElementById('texteB'); //met dans une variable l'élement du texte à cacher

  if (js && !css && !html) { //vérifie si la case js est la seul cochée
    texteB.style.display = "none"; //dans ce cas cache le pied
    texteR.style.display = "block"; //et affiche la suite
  }
  else {
    alert('Mauvaise réponse, essaye encore.'); //sinon prévient que la réponse est fausse
  }
}
