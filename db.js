import sql from 'better-sqlite3';

const db = new sql('posts.db');

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS message (
      id INTEGER PRIMARY KEY, 
      firstName TEXT NOT NULL, 
      secondName TEXT NOT NULL, 
      emailAddress TEXT, 
      contactNumber TEXT NOT NULL,
      description TEXT NULL,
      user_id INTEGER
     
    
    )`);
  db.exec(`
    CREATE TABLE IF NOT EXISTS booking (
      id INTEGER PRIMARY KEY, 
      firstName TEXT NOT NULL, 
      secondName TEXT NOT NULL, 
      emailAddress TEXT, 
      contactNumber TEXT NOT NULL,
      description TEXT NULL,
      guests TEXT NULL,
      roomtype TEXT NOT NULL,
      user_id INTEGER
     
    
    )`);
}


initDb();

export default db;
