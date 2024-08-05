import db from '@/db';

// Function to retrieve image URLs with an optional limit
export async function getNightImage(maxNumber) {
  let limitClause = '';
  if (maxNumber) {
    limitClause = 'LIMIT ?';
  }

  const stmt = db.prepare(`
    SELECT id, image_url, created_at
    FROM night
    ${limitClause}
  `);

  return maxNumber ? stmt.all(maxNumber) : stmt.all();
}

// Function to create a new image URL entry
export async function createNightImage(nightImage) {
  let {imageUrl} = nightImage;
  try {
    const stmt = db.prepare(
      `INSERT INTO night (image_url) VALUES (?)`
    );
    const info = stmt.run(imageUrl);
    return info;
  } catch (error) {
    console.log('Error creating image URL:', error);
    throw error;
  }
}
