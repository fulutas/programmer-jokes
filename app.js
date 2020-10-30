const jokeApi = 'https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist';


function getJoke() {
    fetch(jokeApi)
        .then(response => response.json())
        .then((data) => {
            if (data.type == 'single') {
                document.getElementById('joke').innerHTML = '"' + data.joke + '"'
                document.getElementById('category').innerHTML = '' + data.category + ''

            }
            else {
                document.getElementById('joke').innerHTML = '"' + data.setup + '</br>' + data.delivery + '"'
                document.getElementById('category').innerHTML = '' + data.category + ''
            }
        })
}

function saveAsImage() {
    const findEl = document.getElementById('frame1')
    html2canvas(findEl).then((canvas) => {
        const link = document.createElement('a')
        document.body.appendChild(link)
        link.download = "joke-image.jpg"
        link.href = canvas.toDataURL()
        link.click()
        link.remove()
    })
}