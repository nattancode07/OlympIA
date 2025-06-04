const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota principal para teste
app.get('/', (req, res) => {
  res.send('API do OlympIA funcionando!');
});

// Rotas de autenticação
app.use('/api/auth', authRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
