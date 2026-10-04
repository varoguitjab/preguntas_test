try {
  // El código se detiene aquí hasta que el fetch responde (sin congelar la web)
  const response = await fetch('./csvs/preguntas_decreto_150_2022.json');
  const questions = await response.json();

  console.log(questions);

  const questionText = document.getElementById('question');
  questionText.innerText = questions[0].Pregunta;

} catch (error) {
  console.error('Hubo un problema:', error);
}
