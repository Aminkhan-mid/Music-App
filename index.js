fetch(`https://itunes.apple.com/search?term=arctic+monkeys+i+wanna+be+yours&media=music&entity=song&limit=1`)
    .then(res => res.json())
    .then(data => {
        for(let songs of data.results){
            console.log(songs)
            let artist = songs.artistName
            let songName = songs.trackName
            let songPreview = songs.previewUrl
            let artWork = songs.artworkUrl100
            document.getElementById('song').innerHTML = `   
            <div class="song-bg">
            <img src="${artWork}" alt="zoro" class="song-img">
            <p class="song-title">${songName}</p>
            <p class="song-title">By: ${artist}</p>
            
            <audio controls>
                <source src="${songPreview}" type="audio/mpeg">
                </audio>
                <button >
                    <i class="fa-solid fa-circle-play"></i>
                </button>
            </div>`
        }
})



