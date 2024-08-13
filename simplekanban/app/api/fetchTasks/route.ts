import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '../auth/[...nextauth]/route';
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const session = await getServerSession(authOptions);

    const userEmail = session?.user?.email!;

    const user = await prisma.user.findUnique({
        where: { email: userEmail},
    });

    if (user === null) {
        console.log("no user found")
        return;
    }

    const tasks = await prisma.task.findMany({
        where: {
            userId: user.id,
            stateId: 1
        }
    });

    return NextResponse.json({ tasks: tasks }, { status: 200 });
}