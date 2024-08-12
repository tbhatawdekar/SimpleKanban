'use client';
import { useState } from 'react';

export default function AddTask() {
    const [taskName, setTaskName] = useState('');

    const createTask = async () => {

        const taskData = {
            name: taskName,
        };
        console.log("test");
        await fetch('/api/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData),
        });
        setTaskName('');
    }

    return (
        <form onSubmit={createTask}>
            <h3>Add a task!</h3>
            <input
                type="text"
                placeholder="e.g., Feed the cat"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}
