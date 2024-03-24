import prisma from '../../../lib/prisma';
import { getSession } from 'next-auth/react';
import { format } from 'date-fns';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const message = await prisma.messages.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        User: true,
      },
      //  select: {
      //   id: true,
      //   msg: true,
      //   createdAt: true,
      //   User: {
      //     name: true,
      //     email: true,
      //   },
      // },
    });

    return res.status(200).json(
      message.map(msg => {
        return {
          id: msg.id,
          msg: msg.msg,
          createdAt: format(new Date(msg.createdAt), "d MMM yyyy 'at' h:mm bb"),
          updatedAt: format(new Date(msg.updatedAt), "d MMM yyyy 'at' h:mm bb"),
          User: {
            email: msg.User.email,
            name: msg.User.name,
          },
        };
      })
    );
  }

  const session = await getSession({ req });
  const { message } = req.body;

  if (!session) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  if (req.method === 'POST') {
    const createdMessage = await prisma.messages.create({
      data: {
        msg: message,
        User: {
          connect: {
            id: session.user.id,
          },
        },
      },
    });

    res.status(200).json({
      msg: createdMessage.message,
    });
  }
}
