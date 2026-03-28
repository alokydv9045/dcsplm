import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, phone, subject, message } = body

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required fields' },
                { status: 400 }
            )
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            )
        }

        // Save to Database (Mocked - DB Removed)
        console.log('✅ Mock: Inquiry received', { name, email, phone, subject, message })

        // Send email using Resend (if API key is configured)
        if (process.env.RESEND_API_KEY) {
            try {
                const resend = new Resend(process.env.RESEND_API_KEY)

                await resend.emails.send({
                    from: 'DCS PLM <onboarding@resend.dev>',
                    to: process.env.CONTACT_EMAIL || 'enquiry@dcsplm.com',
                    subject: subject || `New Inquiry from ${name}`,
                    text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Subject: ${subject || 'N/A'}

Message:
${message}
                    `,
                })
                console.log('✅ Email sent via Resend')
            } catch (emailError) {
                console.error('⚠️ Email sending failed:', emailError)
            }
        }

        return NextResponse.json(
            { message: 'Inquiry submitted successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Contact API Error:', error)
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
