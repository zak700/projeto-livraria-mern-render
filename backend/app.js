const express = require("express");
const connectDB = require('./config/db');
const booksRoutes = require('./routes/api/books')
const cors = require('cors');

const app = express();

app.use(express.json({ extended: false }));
// conecta o banco de dados
connectDB();

// Cors
app.use(cors({ origin: true, credentials: true }));

//rotas api
app.use('/api/books', booksRoutes);


const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));