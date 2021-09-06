
const search=document.getElementById('search')
search.addEventListener('click',function() {
    const input=document.getElementById('input').value
console.log(input)

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input+'&appid=6bfa396dd0207f200e20e3b486d99ca6')
    .then(res=>res.json())
    .then(data=>{
    const city=data.name

    const temp=data.main.temp

    const sky=data.weather
    const skyDes=sky[0]

    document.getElementById('city-name').innerText=city
    document.getElementById('temp').innerText=temp
    document.getElementById('sky-des').innerText=skyDes.main
})
})

