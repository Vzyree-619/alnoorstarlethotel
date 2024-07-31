import sql from 'better-sqlite3';



const db = new sql('posts.db');

export async function getMessages(maxNumber) {
    let limitClause = '';
  
    if (maxNumber) {
      limitClause = 'LIMIT ?';
    }
  
    const stmt = db.prepare(`
      SELECT posts.id, image_url AS image, firstName, secondName, Message, created_at AS createdAt, first_name AS userFirstName, last_name AS userLastName
      FROM posts
      INNER JOIN users ON posts.user_id = users.id
      LEFT JOIN likes ON posts.id = likes.post_id
      GROUP BY posts.id
      ORDER BY createdAt DESC
      ${limitClause}`);
  
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return maxNumber ? stmt.all(maxNumber) : stmt.all();
  }

export async function createMessage(post) {
    const stmt = db.prepare(`
      INSERT INTO posts (firstName, secondName, email , contactNumber, Message, user_id)
      VALUES (?, ?, ?, ?)`);
    
    return stmt.run(post.firstName, post.secondName, post.email, post.contactNumber, post.Message, post.userId);
  }

