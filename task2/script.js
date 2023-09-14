document.querySelector('#consoleLog').addEventListener('click', 
  (event) => {
    alert("Выводит текст в консоль в виде сообщения журнала.");
})

document.querySelector('#alert').addEventListener('click', 
  (event) => {
    alert("Это небольшое окно с сообщением называется модальным окном. Понятие модальное означает, что пользователь не может взаимодействовать с интерфейсом остальной части страницы, нажимать на другие кнопки и т.д. до тех пор, пока взаимодействует с окном. В данном случае – пока не будет нажата кнопка «OK»..");
})

document.querySelector('#prompt').addEventListener('click', 
  (event) => {
    alert("Функция prompt выводит окно для ввода данных.");
})