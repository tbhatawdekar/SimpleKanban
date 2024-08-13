'use client';
import React, { useEffect, useState } from 'react';
import DeleteTask from './delete';

interface Task {
    id: string;
    name: string;
}

export default function NewTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const stateId = 3;
    
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

    const handleDelete = (taskId: string) => {
        return async (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            await DeleteTask(taskId);
        };
    }

    return (
        <div> 
            <h3>Completed:</h3>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.name}
                        <button onClick={handleDelete(task.id)}>Remove</button>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
}

