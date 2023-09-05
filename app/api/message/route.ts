import { NextResponse } from 'next/server';
import prismaDb from '@/prisma/prismaDb';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { firstName, lastName, email, subject, message } = body;

        if (!firstName) {
            return NextResponse.json('First name is required', { status: 400 });
        }

        if (!lastName) {
            return NextResponse.json('Last name is required', { status: 400 });
        }

        if (!email) {
            return NextResponse.json('Email is required', { status: 400 });
        }

        if (!subject) {
            return NextResponse.json('Subject is required', { status: 400 });
        }

        if (!message) {
            return NextResponse.json('Message is required', { status: 400 });
        }

        const newMessage = await prismaDb.message.create({
            data: { firstName, lastName, email, subject, message },
        });

        return NextResponse.json(newMessage);
    } catch (error) {
        throw new NextResponse('Internal error', { status: 500 });
    }
}
