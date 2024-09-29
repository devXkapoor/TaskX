
import { getProjectById } from '@/actions/ProjectActions'; // Import the Prisma action
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ProjectDashboard = async ({ params }: { params: { id: string } }) => {

    const Project = await getProjectById(params.id);

    if (!Project) {
        return <p>Project not found or an error occurred.</p>;
    }

    return (
        <div className="p-6 text-white">
            <Link href="/ProjectList">
                <Button
                    className="mb-4 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                >
                    Back
                </Button>
            </Link>

            <div className='flex'>
                <div>
                    <h1 className="text-2xl font-bold mb-4">Project Dashboard</h1><br /><br />
                    <h1 className="text-2xl font-bold mb-4">Project Title: {Project.ProjectTitle}</h1>
                    <h1 className="text-2xl font-bold mb-4">Project Department: {Project.ProjectDepartment}</h1>
                    <h1 className="text-2xl font-bold mb-4">Project Description: {Project.ProjectDescription}</h1>
                    <h1 className="text-2xl font-bold mb-4">Project Relevant Files: {Project.ProjectRelevantFiles}</h1>
                    <h1 className="text-2xl font-bold mb-4">Project Relevant Links: {Project.ProjectRelevantLinks}</h1>
                    <h1 className="text-2xl font-bold mb-4">Project Existing Students: {Project.ProjectExistingStudents}</h1>
                    <h1 className="text-2xl font-bold mb-4">Project Deadline: {Project.ProjectDeadline}</h1>
                </div>

            </div>


            {/* Add more components as needed */}
        </div>
    );
};


export default ProjectDashboard;
