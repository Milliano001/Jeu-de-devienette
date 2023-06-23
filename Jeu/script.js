const genererNombreAleatoire = () => {
    // Générer un nombre entier entre 1 et 100
    const nombre = Math.floor(Math.random() * 100) + 1;
  
    // Retourner ce nombre
    return nombre;
  };
  
  let numeroTentative = 1;
  let nombreBas = 1;
  let nombreHaut = 100;
  let nombreATrouver;
  
  const ajouterTextAuContainer = texte => {
    const divTexte = document.createElement('div');
    divTexte.textContent = texte;
  
    const container = document.getElementById('container');
    container.insertBefore(divTexte, container.firstChild);
  };
  
  const ajouterIndiceAuContainer = texte => {
    const divIndice = document.createElement('div');
    divIndice.textContent = texte;
  
    const container = document.getElementById('container');
    container.insertBefore(divIndice, container.firstChild);
  };
  
  const initialiserJeu = () => {
    numeroTentative = 1;
    nombreATrouver = genererNombreAleatoire();
    nbreplus= nombreATrouver + 10;
    nmbremoins= nombreATrouver -7;
    console.log(nombreATrouver);
    ajouterIndiceAuContainer('Indice : Le nombre a trouvée est entre  '+ nmbremoins +' et '+nbreplus);
  };
  
  const proposerNombre = () => {
    // Récupérer le champ avec le nombre
    const input = document.getElementById('input-nombre');
  
    // Récupérer la valeur du champ
    const valeur = input.value;
  
    // Vérifier que la valeur n'est pas vide
    if (valeur === '') {
      // Si elle est vide, ne rien faire
      return;
    }
  
    // Transformer la valeur texte en nombre entier
    const nombrePropose = parseInt(valeur, 10);
  
    ajouterTextAuContainer('Tentative ' + numeroTentative);
  
    // Comparer le nombre avec le nombre à trouver
    if (nombrePropose === nombreATrouver) {
      console.log('Bravo');
      ajouterTextAuContainer('Bravo 👏🏼👏🏼');
  
      const elementCentre = document.getElementById('centre');
      elementCentre.textContent = nombrePropose + ' 👏🏼👏🏼';
    } else {
      if (numeroTentative === 1) {
        console.log('Vous avez raté la première tentative');
        ajouterTextAuContainer('Vous avez raté la première tentative 😔');
        ajouterIndiceAuContainer('Indice : La Mutiltipication du nombre à trouver par 0.5 diminué de 7 est ' + (Math.floor(nombreATrouver*0.5) - 7));
      } else if (numeroTentative === 2) {
        console.log('Vous avez raté la deuxième tentative');
        ajouterTextAuContainer('Vous avez raté la deuxième tentative 😔');
        ajouterIndiceAuContainer('Indice : Hum! le carré de ce nombre augmenté de 4 donne ' + (Math.floor(nombreATrouver*nombreATrouver) + 4));
      } else {
        console.log('Vous avez raté les trois tentatives');
        ajouterTextAuContainer('Vous avez raté les trois tentatives 😔');
        ajouterIndiceAuContainer('Le nombre à trouver était ' + nombreATrouver);
      }
    }
  
    numeroTentative += 1;
  };
  
  const bouton = document.getElementById('button-proposer');
  bouton.addEventListener('click', proposerNombre);
  
  // Initialiser le jeu au chargement de la page
  document.addEventListener('DOMContentLoaded', initialiserJeu);
  