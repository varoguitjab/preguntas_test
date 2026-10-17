
let question_files = ['preguntas_decreto_150_2022'];
let questions = [];
let index = 0;

const questionText = document.getElementById('question');
const option_a = document.querySelector('#option-a p');
const option_b = document.querySelector('#option-b p');
const option_c = document.querySelector('#option-c p');
const option_d = document.querySelector('#option-d p');
try {

 for (const file_name of question_files) {
    const response = await fetch('./csvs/'+file_name+'.json');
    let file_questions = await response.json();
    questions = questions.concat(file_questions);    
  }
  
  
  
} catch (error) {
  console.error('Hubo un problema:', error);
}

updateQuestions();

document.getElementById('btn-next').addEventListener('click', () => {  
  updateQuestions();
});

// Seleccionamos todas las opciones y les añadimos el evento de clic
document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', (event) => {        
    if(questions[index].opcion_correcta == event.currentTarget.getAttribute('data-option-value'))
      event.currentTarget.classList.add('correct');        
    else
      event.currentTarget.classList.add('incorrect');        
  });
});

function updateQuestions()
{
  index = Math.floor(Math.random() * questions.length);
  questionText.innerText = questions[index].Pregunta;
  option_a.innerText= questions[index].respuesta_a;
  option_b.innerText= questions[index].respuesta_b;
  option_c.innerText= questions[index].respuesta_c;
  option_d.innerText= questions[index].respuesta_d;
  
  document.querySelectorAll('.option').forEach(option => {
    option.classList.remove('correct');
    option.classList.remove('incorrect');
  });
}
