const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());

const dbConfig = {
  host: process.env.DB_HOST || 'database',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'rootpass',
  database: process.env.DB_NAME || 'cv_db',
  port: 3306
};

app.get('/cv', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [personas] = await connection.execute('SELECT * FROM persona LIMIT 1');
    const persona = personas[0];
    const [formacion] = await connection.execute(
      'SELECT * FROM formacion WHERE persona_id = ?',
      [persona.id]
    );
    await connection.end();
    res.json({ persona, formacion });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Error al obtener datos del CV' });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend corriendo en puerto ${PORT}`);
});
