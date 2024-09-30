"use client";

import { getTaskById, getTaskDetailsById } from '@/actions/TaskActions';
import TextAreaForm from '@/components/TextAreaForm/TextAreaForm';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const TaskDashboard = ({ params }: { params: { id: string } }) => {

    const [Task, setTask] = useState<any>(null);
    const [TaskDetails, setTaskDetails] = useState<any[]>([]); // Ensuring TaskDetails is always an array

    // Function to fetch task and task details
    const fetchData = async () => {
        try {
            const task = await getTaskById(params.id);
            const taskDetails = await getTaskDetailsById(params.id);

            setTask(task);
            // Ensure taskDetails is never null, fallback to an empty array if null
            setTaskDetails(taskDetails ?? []);
        } catch (error) {
            console.error("Error fetching task or task details:", error);
        }
    };

    // useEffect to call the fetchData function when the component mounts
    useEffect(() => {
        fetchData();
    }, [params.id]); // Ensure useEffect runs when params.id changes

    if (!Task) {
        return <p>Loading...</p>; // Handle the loading state
    }

    return (
        <div className="p-6 text-white">
            <Link href="/TaskList">
                <Button
                    className="mb-4 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                >
                    Back
                </Button>
            </Link>

            <div>
                <div>
                    <br />
                    <h1 className="text-2xl font-bold mb-4">Task Dashboard</h1><br />
                    <h1 className="text-2xl font-bold mb-4">Task Title: {Task.TaskTitle}</h1>
                    <h1 className="text-2xl font-bold mb-4">Task Description: {Task.TaskDescription}</h1>
                    <h1 className="text-2xl font-bold mb-4">Task Basic Deadline: {Task.TaskBasicDeadline}</h1>
                    <h1 className="text-2xl font-bold mb-4">Task Advanced Deadline: {Task.TaskAdvancedDeadline}</h1>

                    <h1 className="text-2xl font-bold mb-4">Task Details:</h1>
                    {TaskDetails.length > 0 ? (
                        TaskDetails.map((TaskDetail) => (
                            <div key={TaskDetail.TaskDetailID}>
                                <p className="text-xl font-bold mb-2">{TaskDetail.TaskDetail}</p>
                            </div>
                        ))
                    ) : (
                        <p>No task details available</p>
                    )}
                </div>

                <div>
                    <br /><br /><TextAreaForm taskId={params.id} />
                </div>
            </div>
        </div>
    );
};

export default TaskDashboard;
