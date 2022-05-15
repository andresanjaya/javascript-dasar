function getPilihanComputer() {
    const comp = Math.random();
    if ( comp < 0.34) return 'stone'
    if ( comp >= 0.34 && comp < 0.67) return 'scissors';
    return 'paper';
}

function getHasil(comp, player) {
    if( player == comp ) return  'DRAW!';
    if( player == 'stone' ) return ( comp == 'scissors' ) ? 'WIN!' : 'LOSE!';
    if( player == 'scissors' ) return ( comp == 'stone' ) ? 'LOSE!' : 'WIN!!';
    if( player == 'paper' ) return ( comp == 'scissors' ) ? 'LOSE!' : 'WIN!!';
}

function putarGambar() {
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['stone', 'scissors', 'paper'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {

        if(new Date().getTime() - waktuMulai > 1000 ) {
            clearInterval;
            return;
        }

        imgComputer.setAttribute('src', 'Gambar/' + gambar[i++] + '.png');
        if(i == gambar.length) i = 0;
    }, 100)
}

const pilihan  = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putarGambar();

        setTimeout(function() {

            const imgComputer = document.querySelector('.img-computer');
            imgComputer.setAttribute('src', 'Gambar/' + pilihanComputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);
        
    });
});

// const pStone = document.querySelector('.stone');
// pStone.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pStone.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'Gambar/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })

// const pScissors = document.querySelector('.scissors');
// pScissors.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pScissors.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'Gambar/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })

// const pPaper = document.querySelector('.paper');
// pPaper.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pPaper.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'Gambar/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })