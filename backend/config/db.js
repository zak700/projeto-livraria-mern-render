const mongoose = require('mongoose');
const config = require('config');
// const db = config.get('mongoURI');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        // Configuração para evitar consultas ambíguas
        mongoose.set('strictQuery', true);

        // Conectando ao MongoDB sem opções depreciadas
        await mongoose.connect(uri);

        console.log('mongoDB esta conectado...');
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB:', err.message);
        process.exit(1); // Encerra o processo com falha
    }
};

module.exports = connectDB;