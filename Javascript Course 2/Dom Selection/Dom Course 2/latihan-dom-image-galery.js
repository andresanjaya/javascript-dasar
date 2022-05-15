const container = document.querySelector('.container');
const bigAlbum = document.querySelector('.bigAlbum');
const thAlbums = document.querySelectorAll('.thAlbum')

container.addEventListener('click', function(e) {

    if( e.target.className == 'thAlbum' ) {
        bigAlbum.src = e.target.src;
        bigAlbum.classList = 'fade';
        setTimeout(function() {
            bigAlbum.classList.remove('fade');
        },100);

        thAlbums.forEach(function(thAlbum) {
            thAlbum.className = 'thAlbum';
        });

        e.target.classList.add('active');
    }

});