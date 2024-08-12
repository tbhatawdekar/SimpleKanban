const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

async function testConnection() {
    try {
        const res = await pool.query('SELECT NOW()');
        console.log('Connection successful:', res.rows[0]);
        await pool.end();  // Close the pool
    } catch (err) {
        console.error('Connection failed:', err);
    }
}

testConnection();
