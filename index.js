require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Mongo conectado"))
.catch(err => console.log(err));

// 👇 NUEVO
app.get('/', (req, res) => {
    res.send('API funcionando correctamente 🚀');
});

app.get('/health', (req, res) => {
    res.json({ status: "ok" });
});

// 👇 YA TENÍAS
app.use('/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API corriendo en ${PORT}`);
});
