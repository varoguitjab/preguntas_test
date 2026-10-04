console.log('hola');
fetch('./csvs/preguntas_decreto_150_2022.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Array of question objects
    data.forEach(item => {
      console.log(item.Pregunta); // Access each question
    });
  })
  .catch(error => console.error('Error:', error));

