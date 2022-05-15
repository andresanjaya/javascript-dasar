const p2 = document.querySelector('.p2');

p2.addEventListener('mouseenter', function() {
    p2.style.backgroundColor = 'salmon';
});
p2.addEventListener('mouseleave', function() {
    p2.style.backgroundColor = 'lightblue';
});

const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = '#f5edd5';
});

password.addEventListener('blur', (event) => {
  event.target.style.background = '';
});



