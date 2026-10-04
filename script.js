console.log('hola');
const response = fetch('./csvs/preguntas_decreto_150_2022.json');
const questions = await response.json();
question_text = document.getElementById('question');
updateQuestions();
console.log(questions);


function updateQuestions()
{
  question_text.innerText = questions[0].Pregunta;
}
