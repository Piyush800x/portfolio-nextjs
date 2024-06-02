'use server';
import nodemailer from 'nodemailer';
import { type NextRequest, NextResponse } from 'next/server';
import Mail from 'nodemailer/lib/mailer';


export async function POST(req: NextRequest) {
    if (req.method != 'POST')   {
        return NextResponse.json({ message: 'Method Not Allowed'}, {status: 405});
    }

    const { name, email, subject } = await req.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_MAIL,
            pass: process.env.GMAIL_MAIL_PASS
        },
    });

    // Mail to self
    const mailToSelf: Mail.Options = {
        from: process.env.BUSINESS_MAIL,
        to: process.env.MY_EMAIL,
        subject: `Contact from ${name} |  number: ${subject}, email: ${email}`,
        html: `
        <h1>Hire Me Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        `
    };

    // Send email to client
    const mailToClient: Mail.Options = {
        from: process.env.BUSINESS_MAIL,
        to: email,
        subject: `You have reached Piyush Paul`,
        html: `
        <h1>Thank you for your interest!</h1>
        <h1>We will get back to you soon</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        `
    }

    // Send mail
    try {
        await transport.sendMail(mailToSelf);
        await transport.sendMail(mailToClient);
        
        return NextResponse.json({ message: 'Emails sent successfully' }, {status: 200});
    }
    catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Internal Server Error' }, {status: 500});
    }
}