import db from '@/db';

// Function to get messages
export async function getMessages(maxNumber) {
  let limitClause = '';
  if (maxNumber) {
    limitClause = 'LIMIT ?';
  }

  const stmt = db.prepare(`
    SELECT message.id, firstName, secondName, options, emailAddress, contactNumber, message1 ,user_id
    FROM message
    
    ${limitClause}`);

  return maxNumber ? stmt.all(maxNumber) : stmt.all();
}

// Function to create a new message
export async function createMessage(message) {
  let { firstName, secondName, options, emailAddress, contactNumber, message1 , user_id } = message;
  try {
    const stmt = db.prepare(`
      INSERT INTO message (firstName, secondName,options, emailAddress, contactNumber, message1, user_id)
      VALUES (?, ?, ?, ?, ?,?,?)
    `);
    const info = stmt.run(firstName, secondName,options, emailAddress, contactNumber, message1,user_id);
    return info;
  } catch (error) {
    console.error('Error creating message:', error);
    throw error;
  }
}
