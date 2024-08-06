import sql from 'better-sqlite3';




import path from 'path';
import fs from 'fs';
import sql from 'better-sqlite3';

// Get the database path from environment variables or use default
const dbPath = process.env.DATABASE_PATH || path.join(process.cwd(), 'data', 'posts.db');

// Ensure the directory exists
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Ensure the database file exists
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, '');
}

let db;
try {
  db = new sql('posts.db');
  console.log(`Connected to the database at ${db}`);
} catch (error) {
  console.error('Failed to connect to the database', error);
  process.exit(1);
}

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
      CREATE TABLE IF NOT EXISTS garden (
        id INTEGER PRIMARY KEY, 
        image_url TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

db.exec(`
  CREATE TABLE IF NOT EXISTS room (
    id INTEGER PRIMARY KEY, 
    image_url TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS night (
    id INTEGER PRIMARY KEY, 
    image_url TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS dining (
    id INTEGER PRIMARY KEY, 
    image_url TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);
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
      checkIn TEXT NULL,  
      checkOut TEXT NULL,
      user_id INTEGER
     
    
    )`);
}


initDb();



export default db;
