'use server';
import nodemailer from 'nodemailer';
import { type NextRequest, NextResponse } from 'next/server';
import Mail from 'nodemailer/lib/mailer';
import { render } from '@react-email/render';
import { MailTemplateContactClient } from '@/components/Mail/MailTempContactClient';
import { MailTemplateContactSelf } from '@/components/Mail/MailTempContactSelf';

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

    const emailHtmlClient = render(MailTemplateContactClient({name: name}))
    const emailHtmlSelf = render(MailTemplateContactSelf({name: name, email: email, subject: subject}))

    // Mail to self
    const mailToSelf: Mail.Options = {
        from: process.env.BUSINESS_MAIL,
        to: process.env.MY_EMAIL,
        subject: `Contact from ${name} |  number: ${subject}, email: ${email}`,
        html: emailHtmlSelf
    };

    // Send email to client
    const mailToClient: Mail.Options = {
        from: process.env.BUSINESS_MAIL,
        to: email,
        subject: `You have reached Piyush Paul`,
        html: emailHtmlClient
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