import { useRouter } from 'next/navigation';

export default async function UpgradeTask(taskId: string) {
    const taskData = { id: taskId };

   return await fetch('/api/upgradeTasks', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
    });
}