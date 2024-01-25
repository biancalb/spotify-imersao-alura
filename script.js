console.log('Rodando...')

const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');
const baseurl = 'http://localhost:4000/artists';

function requestAPI(searchTerm) {
    const url = baseurl + `?name_like=${searchTerm}`

    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

document.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtists.classList.add('hidden');
        return;
    }

    requestAPI(searchTerm);
})

function displayResults(result) {
    console.log(result)
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtists.classList.remove('hidden');
}