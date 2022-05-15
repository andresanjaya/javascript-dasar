// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Andre Sanjaya</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world!';


// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';




//DOM MANIPULATION
//buat elemen baru
const pBaru = document.createElement('p');
const teksBaru = document.createTextNode('Paragraf Baru');

//simpan tulisan ke dalam paragraf
pBaru.appendChild(teksBaru);

//simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);