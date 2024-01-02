let words = [
    { word: "COMPUTER", hint: "An electronic device for processing data" },
    { word: "LAPTOP", hint: "A computer that is portable" },
    { word: "SOFTWARE", hint: "The programs and other operating information" },
    { word: "HARDWARE", hint: "Durable equipment" },
    { word: "CONNECTIONS", hint: "A relationship in which a person or thing linked with someone else" },
    { word: "COLLEGE", hint: "An educational institution" },
    { word: "LIFESTYLE", hint: "The way in which a person lives" },
    { word: "CELLPHONE", hint: "A mobile phone" },
    { word: "FUNCTIONS", hint: "Work or operate in a particular way" },
    { word: "EARTH", hint: "A planet on which we live" },
    { word: "OCEAN", hint: "A very large expanse of sea" },
    { word: "EARTHQUAKE", hint: "A sudden shaking of the ground" },
    { word: "RECYCLE", hint: "Convert into a reusable material" },
    { word: "BUILDING", hint: "A structure with a roof and walls" },
    { word: "MIRROR", hint: "A reflective surface" },
    { word: "PLANET", hint: "A large object that orbits a star" },
    { word: "SIDEWALK", hint: "A paved path for pedestrians" },
    { word: "NOODLES", hint: "Pasta" },
    { word: "CASHIER", hint: "A person handling payments and receipts in a store" },
    { word: "FOOD", hint: "What we eat every day" }
  ];
  
  let shuffledWords = [];
  let currentRound = 0;
  let score = 0;
  
  function shuffleWord(word) {
    return word.split('').sort(function(){return 0.5-Math.random()}).join('');
  }
  
  function startNewRound() {
    shuffledWords = words.map(word => ({ word: shuffleWord(word.word), hint: word.hint }));
    currentRound = 0;
    score = 0;
    updateScore();
    displayNextWord();
  }
  
  function displayNextWord() {
    if (currentRound < words.length) {
      document.getElementById('word-display').textContent = shuffledWords[currentRound].word;
      document.getElementById('hint-display').textContent = `Hint: ${shuffledWords[currentRound].hint}`;
      document.getElementById('result-message').textContent = '';
    } else {
      document.getElementById('word-display').textContent = '';
      document.getElementById('hint-display').textContent = '';
      document.getElementById('result-message').textContent = `Thank you for playing. Your final score is ${score}. I hope you enjoy the game.`;
    }
  }
  
  function checkGuess() {
    const userGuess = document.getElementById('guess-input').value.toUpperCase();
    const correctWord = words[currentRound].word;
  
    if (userGuess === correctWord) {
      document.getElementById('result-message').textContent = 'Good Job!';
      score++;
      updateScore();
      currentRound++;
      setTimeout(() => {
        document.getElementById('word-display').textContent = '';
        document.getElementById('hint-display').textContent = '';
        displayNextWord();
      }, 1000);
    } else {
      document.getElementById('result-message').textContent = 'Incorrect! Please Try Again.';
    }
  }
  
  function updateScore() {
    document.getElementById('score').textContent = score;
  }
  
  // Start the game
  startNewRound();
      
    