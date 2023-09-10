import { NextResponse } from 'next/server';
import prismaDb from '@/prisma/prismaDb';

export async function GET() {
    try {
        const projects = '';

        return NextResponse.json(projects);
    } catch (error) {
        throw new NextResponse('Internal error', { status: 500 });
    }
}
