let questions = [];

const questionText = document.getElementById('question');
const option_a = document.getElementById('option-a p');
const option_b = document.getElementById('option-b p');
const option_c = document.getElementById('option-c p');
const option_d = document.getElementById('option-d p');
try {
  // El código se detiene aquí hasta que el fetch responde (sin congelar la web)
  const response = await fetch('./csvs/preguntas_decreto_150_2022.json');
  questions = await response.json();
  console.log(questions);
  
} catch (error) {
  console.error('Hubo un problema:', error);
}

updateQuestions();

function updateQuestions()
{
  index = Math.floor(Math.random() * questions.length);
  questionText.innerText = questions[index].Pregunta;
  option_a.innerText= questions[index].respuesta_a;
  option_b.innerText= questions[index].respuesta_b;
  option_c.innerText= questions[index].respuesta_c;
  option_d.innerText= questions[index].respuesta_d;
}
