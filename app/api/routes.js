// pages/api/deleteImage.js
import { deleteImageById } from '@/db.js';

export default function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Image ID is required' });
    }

    try {
      const success = deleteImageById(id);
      if (success) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(404).json({ error: 'Image not found' });
      }
    } catch (error) {
      console.error('Failed to delete image:', error);
      return res.status(500).json({ error: 'Failed to delete image' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
