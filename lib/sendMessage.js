import db from '@/db';

// Function to get messages
export async function getMessages(maxNumber) {
  let limitClause = '';
  if (maxNumber) {
    limitClause = 'LIMIT ?';
  }

  const stmt = db.prepare(`
    SELECT message.id, firstName, secondName, emailAddress, contactNumber, description ,user_id
    FROM message
    
    ${limitClause}`);

  return maxNumber ? stmt.all(maxNumber) : stmt.all();
}

export async function createMessage(message) {
  let { firstName, secondName, emailAddress, contactNumber, description , user_id } = message;
  try {
    const stmt = db.prepare(`
      INSERT INTO message (firstName, secondName, emailAddress, contactNumber, description, user_id)
      VALUES (?, ?, ?, ?, ? ,? )
    `);
    const info = stmt.run(firstName, secondName, emailAddress, contactNumber, description , user_id);
    return info;
  } catch (error) {
    console.error('Error creating message:', error);
    throw error;
  }
}
