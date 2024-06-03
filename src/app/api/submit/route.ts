'use server';
import nodemailer from 'nodemailer';
import { type NextRequest, NextResponse } from "next/server";
import Mail from 'nodemailer/lib/mailer';
import { render } from '@react-email/render';
import {MailTemplate} from '@/components/MailTemplateClient';
import { MailTemplateSelf } from '@/components/MailTemplateSelf';


export async function POST(req: NextRequest) {
    if (req.method != 'POST')   {
        return NextResponse.json({ message: 'Method Not Allowed'}, {status: 405});
    }

    const { name, email, phone, budget, project_details, service } = await req.json();
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(budget);
    console.log(project_details);
    console.log(service);

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_MAIL,
            pass: process.env.GMAIL_MAIL_PASS
        },
    });

    const emailHtml = render(MailTemplate({name: name}))
    const emailHtmlSelf = render(MailTemplateSelf({name: name, phone: phone, email: email, project: project_details, budget: budget, service: service}))

    // Send email to client
    const mailToClient: Mail.Options = {
        from: process.env.BUSINESS_MAIL,
        to: email,
        subject: `Order confirmation from Piyush Paul`,
        html: emailHtml
    }

    // Mail to self
    const mailToSelf: Mail.Options = {
        from: process.env.BUSINESS_MAIL,
        to: process.env.MY_EMAIL,
        subject: `Order from ${name} |  number: ${phone}, email: ${email}, service: ${service}`,
        html: emailHtmlSelf
    }

    // Send mail
    try {
        await transport.sendMail(mailToClient);
        await transport.sendMail(mailToSelf);

        return NextResponse.json({ message: 'Emails sent successfully' }, {status: 200});
    }
    catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Internal Server Error' }, {status: 500});
    }

}