// Comprehensive Age-Group Lessons Data Structure
const data = {
  "5-10": {
    title: "The Big Yellow School Bus 🚌",
    story: "Max is 7 years old. Today is his first day of school in America. He sees a big yellow bus. The friendly bus driver smiles and says: 'Good morning! Please take a seat.' Max smiles back and finds a seat near his new friend.",
    question: "What color is the school bus in the story?",
    options: ["Blue", "Yellow", "Red"],
    correct: 1 // Yellow
  },
  "11-13": {
    title: "Joining the Soccer Team ⚽",
    story: "Elena recently moved to a town in California. At middle school, she decides to try out for the soccer team. During practice, the coach yells, 'Pass the ball!' Elena passes it smoothly, and her teammate scores a goal. The team cheers, making her feel instantly welcome.",
    question: "Why did Elena's teammates cheer?",
    options: ["She scored a goal herself", "She made a smooth pass that led to a goal", "Practice was over"],
    correct: 1
  },
  "14-16": {
    title: "First Day at an American High School 🏫",
    story: "Navid was nervous about navigating his local American high school. His schedule included Algebra, Biology, and English Literature. During lunch break, a student pointed toward the cafeteria and said, 'You can sit with us!' Navid breathed a sigh of relief as he began learning common high school slang.",
    question: "Where did another student invite Navid to sit?",
    options: ["In biology lab", "In the cafeteria during lunch", "On the school bus"],
    correct: 1
  },
  "17-19": {
    title: "Opening a College Bank Account 💳",
    story: "Starting freshman year at a US university can be overwhelming. Before classes began, Sofia visited a local bank branch to open a student checking account. The banker explained how to use a debit card safely at ATMs and avoid monthly maintenance fees by maintaining a minimum balance.",
    question: "What was Sofia trying to accomplish at the bank?",
    options: ["Apply for a job", "Open a student checking account", "Pay her tuition bill directly"],
    correct: 1
  },
  "20-30": {
    title: "Prepping for a Job Interview 💼",
    story: "Liam spent the weekend practicing common interview phrases. He focused on highlighting his past background clearly while maintaining polite directness, an element valued heavily in US workplace culture. He rehearsed phrases like, 'I excel at problem-solving under pressure' and 'I look forward to contributing to your team.'",
    question: "What cultural aspect of US interviews did Liam practice?",
    options: ["Speaking as fast as possible", "Polite directness while sharing achievements", "Avoiding eye contact entirely"],
    correct: 1
  },
  "30+": {
    title: "Attending a Neighborhood Association Meeting 🏡",
    story: "To feel more integrated into their community, Martha and her husband attended the monthly neighborhood association meeting. The agenda covered community safety, local park upkeep, and volunteering for the upcoming summer block party. It offered an excellent environment to practice casual conversational skills with neighbors.",
    question: "What was a main objective for Martha attending the meeting?",
    options: ["To practice English and connect with her community", "To file a formal legal complaint", "To buy property in the area"],
    correct: 0
  }
};

// App Navigation Logic
function selectAge(group) {
  document.getElementById('age-screen').classList.add('hidden');
  document.getElementById('lesson-screen').classList.remove('hidden');

  // Load Content
  const dataSet = data[group];
  document.getElementById('age-badge').textContent = `Age Group: ${group}`;
  document.getElementById('lesson-title').textContent = dataSet.title;
  document.getElementById('lesson-story').textContent = dataSet.story;
  document.getElementById('quiz-question').textContent = dataSet.question;

  // Clear previous buttons and feedback
  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = '';
  document.getElementById('feedback').classList.add('hidden');

  // Render options dynamically
  dataSet.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.textContent = option;
    button.onclick = () => checkAnswer(index, dataSet.correct);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex, correctIndex) {
  const feedback = document.getElementById('feedback');
  feedback.classList.remove('hidden');

  if (selectedIndex === correctIndex) {
    feedback.textContent = "🎉 Excellent! Correct Answer.";
    feedback.style.color = "#58cc02";
  } else {
    feedback.textContent = "❌ Not quite. Reread the story carefully and try again!";
    feedback.style.color = "#ff4b4b";
  }
}

function goBack() {
  document.getElementById('lesson-screen').classList.add('hidden');
  document.getElementById('age-screen').classList.remove('hidden');
}
