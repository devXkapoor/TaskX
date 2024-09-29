import { getTaskById } from '@/actions/TaskActions'; // Import the Prisma action
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const TaskDashboard = async ({ params }: { params: { id: string } }) => {

    const Task = await getTaskById(params.id);

    if (!Task) {
        return <p>Task not found or an error occurred.</p>;
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

            <div className='flex'>
                <div>
                    <h1 className="text-2xl font-bold mb-4">Task Dashboard</h1><br /><br />
                    <h1 className="text-2xl font-bold mb-4">Task ID: {Task.TaskID}</h1>
                    <h1 className="text-2xl font-bold mb-4">Task Title: {Task.TaskTitle}</h1>
                    <h1 className="text-2xl font-bold mb-4">Task Description: {Task.TaskDescription}</h1>
                    <h1 className="text-2xl font-bold mb-4">Task Status: {Task.TaskStatus}</h1>
                    <h1 className="text-2xl font-bold mb-4">Task Relevant Files: {Task.TaskRelevantFiles}</h1>
                    <h1 className="text-2xl font-bold mb-4">Task Relevant Links: {Task.TaskRelevantLinks}</h1>
                    <h1 className="text-2xl font-bold mb-4">Task Sumission Deadline: {Task.TaskSubmissionDeadline}</h1>
                </div>

            </div>


            {/* Add more components as needed */}
        </div>
    );
};


export default TaskDashboard;
