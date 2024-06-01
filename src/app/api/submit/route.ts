'use server';
import nodemailer from 'nodemailer';
import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import Mail from 'nodemailer/lib/mailer';
// import { NextApiRequest, NextApiResponse } from 'next';

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

    // Send email to client
    const mailToClient: Mail.Options = {
        from: process.env.BUSINESS_MAIL,
        to: email,
        subject: `Order confirmation from Piyush Paul`,
        html: `
        <h1>Thank you for your interest!</h1>
        <h1>We will get back to you soon</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project:</strong> ${project_details}</p>
        <p><strong>Phone:</strong> ${budget}</p>
        <p><strong>Phone:</strong> ${service}</p>
        `
    }

    // Mail to self
    const mailToSelf: Mail.Options = {
        from: process.env.BUSINESS_MAIL,
        to: process.env.MY_EMAIL,
        subject: `Order from ${name} |  number: ${phone}, email: ${email}, service: ${service}`,
        html: `
        <h1>Hire Me Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project:</strong> ${project_details}</p>
        <p><strong>Phone:</strong> ${budget}</p>
        <p><strong>Phone:</strong> ${service}</p>
        `
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