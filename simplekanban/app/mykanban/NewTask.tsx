'use client';
import React, { useEffect, useState } from 'react';
import UpgradeTask from './upgrade';
import { useRouter } from 'next/navigation'


interface Task {
    id: string;
    name: string;
}

export default function NewTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const stateId = 1;
    const router = useRouter();

    useEffect(() => { async function fetchTasks() {
            const res = await fetch(`/api/fetchTasks?stateId=${stateId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await res.json();
            setTasks(data.tasks);
        }    
        fetchTasks();
    }, []);

    const handleUpgrade = (taskId: string) => {
        return async (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            await UpgradeTask(taskId);
        };
    };

    return (
        <div> 
            <h3>New Tasks:</h3>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.name}
                        <button onClick={handleUpgrade(task.id)}>Upgrade</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

