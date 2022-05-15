//Dom Selection
//document.getElementById() -> element

const judul = document.getElementById('judul');
judul.style.color = 'white';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'Andre Sanjaya';

//document.getElementsByTagName -> HTML Collection
const p = document.getElementsByTagName('p');

for( let i = 0; i <p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '40px';


//document.getElementsByClassName -> HTML Collection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini Diubah Dari Javascript';