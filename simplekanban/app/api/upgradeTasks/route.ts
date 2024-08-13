import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '../auth/[...nextauth]/route';
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email!;

    const user = await prisma.user.findUnique({
        where: { email: userEmail},
    });

    if (user === null) {
        console.log("no user found")
        return;
    }

    const data = await req.json();
    const taskId = data.id;

    const task = await prisma.task.findUnique({
        where: { id: taskId }
    });

    if (task === null) {
        return console.log("task DNE");
    }
    const updatedTask = await prisma.task.update({
        where: { id: taskId },
        data: { stateId: task.stateId + 1 }
    });

    return NextResponse.json({ task: updatedTask }, { status: 200 })

}
