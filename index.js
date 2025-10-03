const searchInp = document.getElementById("search-inp");
const searchBtn = document.getElementById("search-btn");

// Function to render songs and handle play/pause
function renderSongs(songs) {
    const container = document.getElementById("display-songs");
    container.innerHTML = "";

    songs.forEach(song => {
        const artist = song.artistName;
        const songName = song.trackName;
        const songPreview = song.previewUrl;
        const artWork = song.artworkUrl100;

        const releaseDate = song.releaseDate;
        const date = new Date(releaseDate);
        const options = { year: "numeric", month: "long", day: "numeric" };
        const formatted = date.toLocaleDateString("en-US", options);

        container.innerHTML += `
            <section class="songs-container">
                <div class="song-details">
                    <p class="artist-name">${artist}</p>
                    <p class="song-name">${songName}</p>
                    <p class="release-date">${formatted}</p>
                    <button class="song-previewBtn">
                        <i class="fa-solid fa-play"></i>
                    </button>
                    <audio class="myAudio" src="${songPreview}"></audio>
                </div>
                <img src="${artWork}" alt="music thumbnail">
            </section>
        `;
    });

    // Play/pause logic
    const buttons = document.querySelectorAll(".song-previewBtn");
    const audios = document.querySelectorAll(".myAudio");

    buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const audio = audios[index];
            if (audio.paused) {
                // Pause all other audios
                audios.forEach(a => {
                    a.pause();
                    a.currentTime = 0;
                });
                buttons.forEach(b => b.innerHTML = `<i class="fa-solid fa-play"></i>`);

                audio.play();
                btn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
            } else {
                audio.pause();
                btn.innerHTML = `<i class="fa-solid fa-play"></i>`;
            }
        });
    });
}

// Function to search songs
async function getSearchSongResults(searchValue) {
    try {
        const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(searchValue)}&entity=song&limit=50&country=US`);
        if (!res.ok) throw new Error("Something went wrong in searching!");

        const data = await res.json();
        console.log(data);

        // Filter only songs with preview
        const songsWithPreview = data.results.filter(song => song.previewUrl);
        renderSongs(songsWithPreview);

    } catch (err) {
        console.log(err);
    }
}

// Function to load default songs (e.g., Arctic Monkeys)
async function getSongProfile() {
    try {
        const res = await fetch(`https://itunes.apple.com/search?term=arctic+monkeys&entity=song&limit=50&country=US`);
        if (!res.ok) throw new Error("Something went wrong!");

        const data = await res.json();
        const songsWithPreview = data.results.filter(song => song.previewUrl);
        renderSongs(songsWithPreview);

    } catch (err) {
        console.log(err);
    }
}

// Event listener for search button
searchBtn.addEventListener("click", () => {
    const searchValue = searchInp.value.trim();
    if (searchValue) {
        getSearchSongResults(searchValue);
    } else {
        console.log("Please enter a search term");
    }
});

// Load default songs on page load
getSongProfile();
