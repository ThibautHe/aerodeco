// import DevisMail from '@/email/DevisMail';
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    
//   const { data, error } = await resend.emails.send({
//     from: 'Acme <onboarding@resend.dev>',
//     to: ['thibaut.hellinckx@hotmail.com'],
//     subject: 'Hello world',
//     react: DevisMail(),
//   });

//   if (error) {
//     return res.status(400).json(error);
//   }

//   res.status(200).json(data);
// };
