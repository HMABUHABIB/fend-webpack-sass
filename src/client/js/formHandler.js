function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form ahmad :::")
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=33615&appid=4964517d2628ee5cfcffcfe8021efd92&units=metric')
        .then(res => res.json())
        .then(function (res) {
            console.log(res)
            document.getElementById('results').innerHTML = res.base
        })
}




export { handleSubmit }
