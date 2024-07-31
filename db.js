import sql from 'better-sqlite3';

const db = new sql('posts.db');

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS message (
      id INTEGER PRIMARY KEY, 
      firstName TEXT NOT NULL, 
      secondName TEXT NOT NULL, 
      options TEXT,
      emailAddress TEXT, 
      contactNumber TEXT NOT NULL,
      message1 TEXT  NULL,
      user_id INTEGER
     
    
    )`);
}

initDb();

export default db;
