import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form state';

formRef.addEventListener('submit', onBtnSubmit);
formRef.addEventListener('input', throttle(onTextAreaInput, 500));

PopulateTextArea();

function onTextAreaInput({ target: { name, value } }) {
  const fieldToUpdate = { [name]: value };
  const store = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  const updatedStore = JSON.stringify({ ...store, ...fieldToUpdate });
  localStorage.setItem(STORAGE_KEY, updatedStore);
}

function onBtnSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function PopulateTextArea() {
  const parseData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  inputRef.value = parseData?.email || '';
  textareaRef.value = parseData?.message || '';
}
