import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { user_name, user_phone, user_address, quantity } = body;

        // Validate input
        if (!user_name || !user_phone || !user_address || !quantity) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configure Nodemailer Transporter
        // utilizing environment variables for security
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or your SMTP provider
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Email Content
        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: 'akremabdelaziz845@gmail.com', // Your receiving email
            subject: `New Order from ${user_name}`,
            html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #0f172a;">طلب جديد للكيبل 3 في 1</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>الاسم:</strong> ${user_name}</p>
          <p><strong>الهاتف:</strong> ${user_phone}</p>
          <p><strong>العنوان:</strong> ${user_address}</p>
          <p><strong>الكمية:</strong> ${quantity}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #777; font-size: 12px;">تم الإرسال من صفحة هبوط CAFELE</p>
        </div>
      `,
        };

        // Send Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Order sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { message: 'Failed to send email' },
            { status: 500 }
        );
    }
}
