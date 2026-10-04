console.log('hola');
const response = fetch('./csvs/preguntas_decreto_150_2022.json');
const questions = await response.json();

console.log(questions);
