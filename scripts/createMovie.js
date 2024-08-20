import axios from 'axios';

const validateForm = ({title, year, director, duration, genre, rate, poster}) => {
    if (!title || !year || !director || !duration || !genre[0] || !rate || !poster) {
        return "All fields are required";
    }
  
    if (typeof year !== 'number') {
        return 'Year must be a number';
    }

    if (!/^[-+]?\d+(\.\d+)?$/.test(rate)) {
        return 'Please enter a valid decimal number';
    }

    if (!poster.includes('https://')) {
        return 'The poster must be a valid URL';
    }

    return null;
};

const createNotification = (message, type) => {
    const notificationWrapper = document.querySelector('.notification__wrapper');
    notificationWrapper.textContent = message;

    if (type === 'success') {
        notificationWrapper.classList.remove('hidden');
        notificationWrapper.classList.add('alert', 'alert-success');
    } else if (type === 'error') {
        notificationWrapper.classList.remove('hidden');
        notificationWrapper.classList.add('alert', 'alert-danger');
    }

    // Optionally, remove the notification after a few seconds
    setTimeout(() => {
        notificationWrapper.classList.add('hidden');
        notificationWrapper.classList.remove('alert', 'alert-success', 'alert-danger');
        notificationWrapper.textContent = '';
    }, 5000); // 5 seconds
};

const createMovie = (e) => {
    e.preventDefault();
    
    const title = document.getElementById('title').value.trim();
    const year = parseInt(document.getElementById('year').value.trim());
    const director = document.getElementById('director').value.trim();
    const duration = document.getElementById('duration').value.trim();
    const genre = document.getElementById('genre').value.trim().split(' ');
    const rate = document.getElementById('rate').value.trim();
    const poster = document.getElementById('poster').value.trim();

    const newMovie = { title, year, director, duration, genre, rate, poster };

    // Validar datos 
    const error = validateForm(newMovie);

    if (error) return alert(error);

    // Petición al back
    axios.post(`${process.env.VITE_BACK_URL}/movies`, newMovie)
        .then(res => {
            createNotification('Created movie!', 'success');
        })
        .catch(err => {
            createNotification('Error creating movie', 'error');
        });
};

export default createMovie;