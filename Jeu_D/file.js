window.addEventListener('DOMContentLoaded', (event) => {
    const animalList = [
        { name: 'lion', hint: 'C\'est le roi de la savane avec une crinière majestueuse.' },
        { name: 'elephant', hint: 'C\'est le plus grand animal terrestre avec une longue trompe.' },
        { name: 'girafe', hint: 'C\'est le plus grand animal terrestre avec un long cou et de longues jambes.' },
        { name: 'rhinoceros', hint: 'C\'est un animal massif avec une corne sur son museau.' },
        { name: 'hippopotame', hint: 'C\'est un animal herbivore semi-aquatique avec une gueule énorme.' },
        {name: 'cobra', hint: 'C\'est un Un serpent venimeux, caractérisé par son capuchon étendu et ses motifs de couleur distinctifs.'},
        {name: 'crocodile', hint: 'C\'est Un reptile prédateur à long museau, doté d\'une peau écailleuse et de dents pointues.C\est un animal aquatique'},
        {name: 'epervier', hint: 'C\'est un prédateur agile qui chasse en vol.'},
        {name: 'guepard', hint: 'C\'est un grand félin connu pour sa vitesse impressionnante. Il est considéré comme l\'animal terrestre le plus rapide au monde.'},
        {name: 'hyene', hint: 'C\'est un carnivore de taille moyenne à l\'apparence unique.Il est également oppotuniste'},
        {name: 'phacochere', hint: 'C\'Un mammifère sauvage de la famille des porcs, il est souvent considéré comme le plus de tous'},
        {name: 'pique-boeuf', hint: 'C\'est un oiseau de la famille des passereaux, il est souvent vu perché sur le dos de grands mammifères, se nourrissant des parasites présents sur leur peau.'},
        {name: 'porc-epic', hint: 'C\'est Un mammifère recouvert de piquants pointus qui le protègent des prédateurs.'},
        {name: 'singe', hint: 'C\'est l\'animal le plus semblable à l\'homme dans la savane'}
    ];

    const maxAttempts = 3; // Nombre maximum de tentatives

    let animalSecret = ''; // Animal secret à deviner
    let attemptsLeft = maxAttempts; // Tentatives restantes

    const wordLengthDisplay = document.getElementById('word-length');
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const attemptsLeftDisplay = document.getElementById('attempts-left');
    const resultDisplay = document.getElementById('result');
    const hintDisplay = document.getElementById('hint');

    function generateRandomAnimal() {
        const randomIndex = Math.floor(Math.random() * animalList.length);
        return animalList[randomIndex];
    }

    function initializeGame() {
        const animal = generateRandomAnimal();
        animalSecret = animal.name;
        attemptsLeft = maxAttempts;

        wordLengthDisplay.textContent = `Le mot secret est un animal de la savane avec ${animalSecret.length} lettres.`;
        attemptsLeftDisplay.textContent = `Vous avez ${attemptsLeft} tentatives.`;
        resultDisplay.textContent = '';
        hintDisplay.textContent = `Indice : ${animal.hint}`;
    }

    function checkGuess() {
        const guess = guessInput.value.toLowerCase().trim();

        if (guess === animalSecret) {
            resultDisplay.textContent = 'Félicitations ! Vous avez trouvé l\'animal secret.';
            guessInput.disabled = true;
            guessButton.disabled = true;
        } else {
            attemptsLeft--;
            attemptsLeftDisplay.textContent = `Il vous reste ${attemptsLeft} tentatives.`;

            if (attemptsLeft === 0) {
                resultDisplay.textContent = `Vous avez épuisé toutes vos tentatives. L'animal secret était : ${animalSecret}`;
                guessInput.disabled = true;
                guessButton.disabled = true;
            }
        }

        guessInput.value = '';
        guessInput.focus();
    }

    initializeGame();

    guessButton.addEventListener('click', checkGuess);
});
