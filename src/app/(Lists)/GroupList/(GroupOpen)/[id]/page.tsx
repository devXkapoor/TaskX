
import { getGroupById } from '@/actions/GroupActions'; // Import the Prisma action
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const GroupDashboard = async ({ params }: { params: { id: string } }) => {

    const Group = await getGroupById(params.id);

    if (!Group) {
        return <p>Group not found or an error occurred.</p>;
    }

    return (
        <div className="p-6 text-white">
            <Link href="/GroupList">
                <Button
                    className="mb-4 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                >
                    Back
                </Button>
            </Link>

            <div className='flex'>
                <div>
                    <h1 className="text-2xl font-bold mb-4">Group Dashboard</h1><br /><br />
                    <h1 className="text-2xl font-bold mb-4">Group Name: {Group.GroupName}</h1>
                    <h1 className="text-2xl font-bold mb-4">Group Description: {Group.GroupDescription}</h1>
                    <h1 className="text-2xl font-bold mb-4">Group Members: {Group.GroupMembers}</h1>
                    <h1 className="text-2xl font-bold mb-4">Group Students: {Group.GroupStudents}</h1>
                    <h1 className="text-2xl font-bold mb-4">Group Professors: {Group.GroupProfessors}</h1>
                </div>
            </div>


            {/* Add more components as needed */}
        </div>
    );
};


export default GroupDashboard;
