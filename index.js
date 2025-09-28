fetch(`https://itunes.apple.com/search?term=arctic+monkeys+i+wanna+be+yours&media=music&entity=song&limit=1`)
    .then(res => res.json())
    .then(data => {
        console.log(data.results[0])
    })

