const searchInp = document.getElementById("search-inp")
const searchBtn = document.getElementById("search-btn")


async function getSearchSongResults(searchValue) {
    try{
        const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(searchValue)}`)
        if(!res.ok){throw new Error("SOMETHING WENT WRONG IN SEARCHING!")}

        const data = await res.json()
        console.log(data)

          const container = document.getElementById("display-songs")
        container.innerHTML = ""

        data.results.forEach((songs, index)=> {

            
            let artist = songs.artistName
            let songName = songs.trackName
            let songPreview = songs.previewUrl
            let artWork = songs.artworkUrl100
            
            let releaseDate = songs.releaseDate
            const date = new Date(releaseDate)
            const options = {year: "numeric", month:"long", day:"numeric"}
            const formated = date.toLocaleDateString("en-US", options)
            
            
            container.innerHTML += `
            <section class="songs-container">
            <div class="song-details">
            <p class="artist-name">${artist}</p>
            <p class="song-name">${songName}</p>
            
            <p class="release-date">${formated}</p>
            
            <button class="song-previewBtn">
            <i class="fa-solid fa-play"></i>
            </button>
            <audio class="myAudio" src="${songPreview}"></audio> 
            </div>
            <img src="${artWork}" alt="music thumbnail">
            </section>
            `
        })
        const buttons = document.querySelectorAll(".song-previewBtn")
        const audios = document.querySelectorAll(".myAudio")

        buttons.forEach((btn, index)=>{
            btn.addEventListener("click", ()=>{
                const audio = audios[index]
                if(audio.paused){

                    audios.forEach(audio =>{
                        audio.pause()
                        audio.currentTime = 0
                    })
                    buttons.forEach(b => b.innerHTML = `<i class="fa-solid fa-play"></i>`)
                    audio.play()
                    btn.innerHTML = `<i class="fa-solid fa-pause"></i>`
                } else {
                    audio.pause()
                    btn.innerHTML =  `<i class="fa-solid fa-play"></i>`
                }
            })
        })    

    } catch(err){
        console.log(err)
    }
}

searchBtn.addEventListener("click", () => {
    const searchValue = searchInp.value.trim()
    if (searchValue) {
        getSearchSongResults(searchValue)
    } else {
        console.log("Please enter a search term")
    }
})


async function getSongProfile() {
    try{
        const res = await fetch(`https://itunes.apple.com/search?term=arctic+monkeys&entity=musicVideo&limit=50`)
        if(!res.ok){
            throw new Error("Something went wrong!")
        }
        const data = await res.json()
        
        const container = document.getElementById("display-songs")
        container.innerHTML = ""

        data.results.forEach((songs, index)=> {

            
            let artist = songs.artistName
            let songName = songs.trackName
            let songPreview = songs.previewUrl
            let artWork = songs.artworkUrl100
            
            let releaseDate = songs.releaseDate
            const date = new Date(releaseDate)
            const options = {year: "numeric", month:"long", day:"numeric"}
            const formated = date.toLocaleDateString("en-US", options)
            
            
            container.innerHTML += `
            <section class="songs-container">
            <div class="song-details">
            <p class="artist-name">${artist}</p>
            <p class="song-name">${songName}</p>
            
            <p class="release-date">${formated}</p>
            
            <button class="song-previewBtn">
            <i class="fa-solid fa-play"></i>
            </button>
            <audio class="myAudio" src="${songPreview}"></audio> 
            </div>
            <img src="${artWork}" alt="music thumbnail">
            </section>
            `
        })
        const buttons = document.querySelectorAll(".song-previewBtn")
        const audios = document.querySelectorAll(".myAudio")

        buttons.forEach((btn, index)=>{
            btn.addEventListener("click", ()=>{
                const audio = audios[index]
                if(audio.paused){

                    audios.forEach(audio =>{
                        audio.pause()
                        audio.currentTime = 0
                    })
                    buttons.forEach(b => b.innerHTML = `<i class="fa-solid fa-play"></i>`)
                    audio.play()
                    btn.innerHTML = `<i class="fa-solid fa-pause"></i>`
                } else {
                    audio.pause()
                    btn.innerHTML =  `<i class="fa-solid fa-play"></i>`
                }
            })
        })    
    }   catch(err) {
        console.log(err)
    }
        
}
getSongProfile()


