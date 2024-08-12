import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '../auth/[...nextauth]/route';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    console.log("test");
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email!;

    const user = await prisma.user.findUnique({
        where: { email: userEmail},
    });

    if (user === null) {
        console.log("no user found")
        return;
    }

    const userId = user.id;
    const data = await req.json();  
    const name = data.name;
    console.log(userId);
    console.log(name);

    const task = await prisma.task.create({
    data: {
        name: name,
        userId: userId,
        stateId: 1, 
    },
  });

  return NextResponse.json({ data: data }, { status: 200 });

}
