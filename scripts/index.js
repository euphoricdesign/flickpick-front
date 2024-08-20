import createMovie from './createMovie';
import renderCards from './renderCards';
import axios from 'axios';
import 'swiper/swiper-bundle.css';
import 'swiper/css/bundle';

const fetchingData = async() => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    
    try {
        const response = await axios.get(`${process.env.VITE_BACK_URL}/movies`);

        if (response.data && response.data.length > 0) {
            setTimeout(() => {
                renderCards(response.data);
                loader.style.display = 'none'; // Ocultar el loader
                content.classList.remove('hidden'); // Mostrar el contenido
            }, 2000)
        } else {
            loader.textContent = "No hay datos disponibles.";
        }

    } catch (error) {
       console.error('La petición no tuvo éxito', error);
       loader.textContent = "Error al cargar los datos.";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchingData();
    const submit = document.getElementById("form");
    submit?.addEventListener('submit', createMovie);
});
