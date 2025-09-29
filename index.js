
async function getSongProfile() {
    try{
        const res = await fetch(`https://itunes.apple.com/search?term=arctic+monkeys+i+wanna+be+yours&media=music&entity=song&limit=1`)
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
        }
    }    
    catch(err) {
        console.log(err)
    }
        
}
getSongProfile()


