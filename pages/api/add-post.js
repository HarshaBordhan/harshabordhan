import prisma from '../../lib/prisma';
import { unstable_getServerSession } from 'next-auth';
import authOptions from './auth/[...nextauth]';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const createdMessage = await prisma.messages.create({
    data: {
      msg: message,
      user: {
        connect: {
          id: session.user.id,
        },
      },
    },
  });

  res.status(200).json({ createdMessage });
}
