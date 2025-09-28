
fetch(`https://itunes.apple.com/search?term=jack+johnson`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
