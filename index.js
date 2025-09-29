
async function getSongProfile() {
    try{
        const res = await fetch(`https://itunes.apple.com/search?term=arctic+monkeys&limit=10`)
        if(!res.ok){
            throw new Error("Something went wrong!")
        }
        const data = await res.json()
        for(let songs of data.results){
            console.log(songs)
            let artist = songs.artistName
            let songName = songs.trackName
            let songPreview = songs.previewUrl
            let artWork = songs.artworkUrl100

            let releaseDate = songs.releaseDate
            const date = new Date(releaseDate)
            const options = {year: "numeric", month:"long", day:"numeric"}
            const formated = date.toLocaleDateString("en-US", options)

            

            document.getElementById("display-songs").innerHTML += `
             <section class="songs-container">
                <div class="song-details">
                    <p class="artist-name">${artist}</p>
                    <p class="song-name">${songName}</p>
                    
                    <p class="release-date">${formated}</p>
                    
                    <button class="song-previewBtn">
                    <i class="fa-solid fa-play"></i>
                    </button>
                </div>
                <img src="${artWork}" alt="music thumbnail">
            </section>
            `
        }
    }    
    catch(err) {
        console.log(err)
    }
        
}
getSongProfile()


