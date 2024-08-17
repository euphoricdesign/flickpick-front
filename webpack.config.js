const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: "./scripts/index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    plugins: [
        new Dotenv({
            path: './.env', // Ruta a tu archivo .env (opcional)
            safe: true,     // Si quieres usar un .env.example para validar variables
            systemvars: true, // Carga variables del sistema en lugar del archivo .env
            silent: true,   // Suprime los mensajes de error
        }),
    ],
}