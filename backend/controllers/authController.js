const connection = require('../config/db');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');

const login = (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios' });
  }

  const sql = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
  connection.query(sql, [email, senha], (err, results) => {
    if (err) {
      console.error('Erro na consulta:', err);
      return res.status(500).json({ error: 'Erro no servidor' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Email ou senha inválidos' });
    }

    const user = results[0];

    const token = jwt.sign(
      { id: user.id, email: user.email },
      jwtConfig.secret,
      { expiresIn: jwtConfig.expiresIn }
    );

    res.json({
      message: 'Login bem-sucedido',
      token,
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email
      }
    });
  });
};

module.exports = { login };
