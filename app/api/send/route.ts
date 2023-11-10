import { EmailTemplate } from '@/app/emails';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: Request) {
  try {
    const {formData, timeStamp} = await request.json()
    const { data, error } = await resend.emails.send({
       
      from: 'Tech Duce <info@socialbrandmanagers.com>',
      to: [formData.email],
      subject: "Welcome to Social Brand Managers",
      react: EmailTemplate({ firstName: formData.name ,  email:formData.email,
      phoneNumber: formData.number,
      message: formData.message,
      timeStamp: timeStamp, }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
