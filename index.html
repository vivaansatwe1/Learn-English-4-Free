// Vocabulary Database
const phrases = [
  { english: '"How\'s it going?"', meaning: '"How are you doing?" / "How is your day?"', category: "Greeting" },
  { english: '"Excuse me, where is the bus stop?"', meaning: "Asking for public transportation assistance.", category: "Travel" },
  { english: '"Can you repeat that slowly, please?"', meaning: "Asking someone to speak slower so you can understand.", category: "Learning" },
  { english: '"Where is the nearest grocery store?"', meaning: "Asking where to buy food and groceries.", category: "Daily Life" }
];

let currentIndex = 0;

const flashcard = document.getElementById('flashcard');
const englishDisplay = document.getElementById('english-phrase');
const meaningDisplay = document.getElementById('translation');
const categoryDisplay = document.querySelector('.card-front .category');
const nextBtn = document.getElementById('next-btn');
const themeToggle = document.getElementById('theme-toggle');

// Flip Flashcard logic
flashcard.addEventListener('click', () => {
  flashcard.classList.toggle('flipped');
});

// Next Phrase logic
nextBtn.addEventListener('click', () => {
  flashcard.classList.remove('flipped');
  
  // Wait slightly for the card to flip back before changing text
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % phrases.length;
    categoryDisplay.textContent = phrases[currentIndex].category;
    englishDisplay.textContent = phrases[currentIndex].english;
    meaningDisplay.textContent = phrases[currentIndex].meaning;
  }, 200);
});

// Interactive Quiz Logic
function checkAnswer(isCorrect) {
  const feedback = document.getElementById('quiz-feedback');
  feedback.classList.remove('hidden');
  
  if (isCorrect) {
    feedback.textContent = "🎉 Correct! Great job!";
    feedback.style.color = "#10b981"; // Green color
  } else {
    feedback.textContent = "❌ Try again! Hint: It relates to shopping or stores.";
    feedback.style.color = "#ef4444"; // Red color
  }
}

// Dark Mode Toggle Logic
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
  }
});
