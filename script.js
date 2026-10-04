try {
  // El código se detiene aquí hasta que el fetch responde (sin congelar la web)
  const response = await fetch('./csvs/preguntas_decreto_150_2022.json');
  const questions = await response.json();

  console.log(questions);

  const questionText = document.getElementById('question');
  const option_a = document.getElementById('option-a');
  const option_b = document.getElementById('option-b');
  const option_c = document.getElementById('option-c');
  const option_d = document.getElementById('option-d');
  
  index = 0;
  questionText.innerText = questions[index].Pregunta;

} catch (error) {
  console.error('Hubo un problema:', error);
}
