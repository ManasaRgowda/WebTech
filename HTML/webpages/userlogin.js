let form = document.querySelector('loginform');
let submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', function(event) {
  event.preventDefault(); // prevent the form from submitting

  let nameInput = document.querySelector('#name');
  let name = nameInput.value;
  console.log(name );
  let nameInput1 = document.querySelector('#password');
  let name1 = nameInput1.value;
  console.log(name1 );
});