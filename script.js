try {
  // El código se detiene aquí hasta que el fetch responde (sin congelar la web)
  const response = await fetch('./csvs/preguntas_decreto_150_2022.json');
  let questions = await response.json();

  console.log(questions);

  const questionText = document.getElementById('question');
  const option_a = document.getElementById('option-a');
  const option_b = document.getElementById('option-b');
  const option_c = document.getElementById('option-c');
  const option_d = document.getElementById('option-d');
  updateQuestions();
  

} catch (error) {
  console.error('Hubo un problema:', error);
}

function updateQuestions()
{
  index = Math.floor(Math.random() * questions.length);
  questionText.innerText = questions[index].Pregunta;
  document.querySelector('#option-a p').innerText= questions[index].respuesta_a;
  document.querySelector('#option-b p').innerText= questions[index].respuesta_b;
  document.querySelector('#option-c p').innerText= questions[index].respuesta_c;
  document.querySelector('#option-d p').innerText= questions[index].respuesta_d;

}
