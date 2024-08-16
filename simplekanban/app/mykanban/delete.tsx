'use client';
export default async function DeleteTask(taskId: string) {
    const taskData = { id: taskId };
    await fetch('/api/deleteTasks', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
    });
}