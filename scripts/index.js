const createMovie = require('./createMovie')
const renderCards = require('./renderCards')
const axios = require('axios')

const fetchingData = async() => {
    try {
        const data = await axios.get('http://localhost:5000/movies')
        renderCards(data.data)
    } catch (error) {
       console.log(error)
       throw new Error('La petición no tuvo exito')
    }
}


document.addEventListener('DOMContentLoaded', () => {
    fetchingData()
    const submit = document.getElementById("form")
    submit?.addEventListener('submit', createMovie)
})





