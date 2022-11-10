// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище 
// объект с полями email и message, в которых сохраняй текущие значения полей формы.
// Пусть ключом для хранилища будет строка "feedback-form-state".

import throttle from 'lodash.throttle';

const inputEmail = document.querySelector('[type="email"]');
const inputMessage = document.querySelector('[name="message"]');
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(saveFormLocal, 500));

let feedbackFormInfo = { email: "", message: "" };

function saveFormLocal(evt) {
    if (!evt.currentTarget) {
        return;
    }
    const {
    elements: { email, message }
    } = evt.currentTarget;
    feedbackFormInfo.email = email.value;
    feedbackFormInfo.message = message.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormInfo));
    console.log("Данные, введенные до перезагрузки страницы", feedbackFormInfo);
}

// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные 
// данные, заполняй ими поля формы.В противном случае поля должны быть пустыми.

function restart() {
    let savedFeedbackForm = JSON.parse(localStorage.getItem("feedback-form-state")) || { email: "", message: "" }; 
    inputEmail.value = savedFeedbackForm.email;
    inputMessage.value = savedFeedbackForm.message;
    console.log("Данные из хранилища", savedFeedbackForm);
}
restart();

// При сабмите формы очищай хранилище и поля формы, а также выводи объект 
// с полями email, message и текущими их значениями в консоль.

form.addEventListener('submit', clearForm);
function clearForm(evt) {    
    evt.preventDefault();
    const {
    elements: { email, message }
  } = evt.currentTarget;

    if (!email.value || !message.value) {
        alert("Есть незаполненные поля");
    } else {
        // console.log(feedbackFormInfo);
        localStorage.removeItem("feedback-form-state");
        email.value = "";
        message.value = "";
    }
}


