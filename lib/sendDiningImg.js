import db from '@/db';

// Function to retrieve image URLs with an optional limit
export async function getDiningImage(maxNumber) {
  let limitClause = '';
  if (maxNumber) {
    limitClause = 'LIMIT ?';
  }

  const stmt = db.prepare(`
   SELECT id, image_url, created_at
    FROM dining
    ${limitClause}
  `);

  return maxNumber ? stmt.all(maxNumber) : stmt.all();
}

export const deleteImageById = (id) => {
  const {imageId} = id
  try {
    const stmt = db.prepare('DELETE FROM dining WHERE id = ?');
    const result = stmt.run(imageId);
    return result.changes > 0;
  } catch (error) {
    console.error('Error deleting image:', error);
    return false;
  }
};

// Function to create a new image URL entry
export async function createDiningImage(diningImage) {
  let {imageUrl} = diningImage;
  try {
    const stmt = db.prepare(
      `INSERT INTO dining (image_url) VALUES (?)`
    );
    const info = stmt.run(imageUrl);
    return info;
  } catch (error) {
    console.log('Error creating image URL:', error);
    throw error;
  }
}
