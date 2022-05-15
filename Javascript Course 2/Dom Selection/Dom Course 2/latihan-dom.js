const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const sliderRed = document.querySelector('input[name=sliderRed]');
const sliderGreen = document.querySelector('input[name=sliderGreen]');
const sliderBlue = document.querySelector('input[name=sliderBlue]');

btn1.addEventListener('click', function() {
    document.body.classList.toggle('hot-pink');
});

btn2.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255+ 1);
    const g = Math.round(Math.random() * 255+ 1);
    const b = Math.round(Math.random() * 255+ 1);
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

sliderRed.addEventListener('input', function() {
    const r = sliderRed.value;
    const g = sliderGreen.value;
    const b = sliderBlue.value;
   
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

sliderGreen.addEventListener('input', function() {
    const r = sliderRed.value;
    const g = sliderGreen.value;
    const b = sliderBlue.value;
   
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

sliderBlue.addEventListener('input', function() {
    const r = sliderRed.value;
    const g = sliderGreen.value;
    const b = sliderBlue.value;
   
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});



document.body.addEventListener('mousemove', function(event) {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    console.log(xPos);
    const yPos = Math.round((event.clientX / window.innerWidth) * 255);
    console.log(yPos);
    const b = Math.round(Math.random() * 255+ 1);

    document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', '+ b +')';
});
