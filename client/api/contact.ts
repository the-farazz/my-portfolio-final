// client/api/contact.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Simple email regex for server-side validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body ?? {};

  // Validate presence
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
  }

  // Validate types
  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return res.status(400).json({ error: 'Invalid field types.' });
  }

  // Validate lengths
  if (name.trim().length < 2 || name.trim().length > 100) {
    return res.status(400).json({ error: 'Name must be between 2 and 100 characters.' });
  }
  if (message.trim().length < 10 || message.trim().length > 2000) {
    return res.status(400).json({ error: 'Message must be between 10 and 2000 characters.' });
  }

  // Validate email format
  if (!EMAIL_REGEX.test(email.trim())) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  // All validations passed — add email-sending logic here (e.g. SendGrid, Resend, Nodemailer)
  return res.status(200).json({ success: true, message: 'Message received successfully.' });
}
