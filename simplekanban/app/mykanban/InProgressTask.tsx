'use client';
import React, { useEffect, useState } from 'react';

interface Task {
    id: string;
    name: string;
}

export default function NewTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const stateId = 2;
    
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


    return (
        <div> 
            <h3>In Progress:</h3>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.name}</li>
                ))}
            </ul>
        </div>
    );
}

