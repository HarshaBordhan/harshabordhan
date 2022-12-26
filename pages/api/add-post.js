import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  const { id } = req.query;
  const message = await prisma.messages.create({
    data: {
      msg: 'Hello Arikko',
      userId: id,
    },
  });
  res.status(200).json({ message });
}
