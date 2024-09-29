
import { getProfessorById } from '@/actions/ProfessorActions'; // Import the Prisma action
import { Button } from '@/components/ui/button';
import Link from 'next/link';



const ProfessorDashboard = async ({ params }: { params: { id: string } }) => {

    const Professor = await getProfessorById(params.id);

    if (!Professor) {
        return <p>Professor not found or an error occurred.</p>;
    }

    return (
        <div className="p-6 text-white">
            <Link href="/ProfessorList">
                <Button
                    className="mb-4 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                >
                    Back
                </Button>
            </Link>

            <div className='flex'>
                <div>
                    <h1 className="text-2xl font-bold mb-4">Professor Dashboard</h1><br /><br />
                    <h2 className="text-2xl font-bold mb-4">Professor Name: {Professor.ProfessorName}</h2>
                    <h2 className="text-2xl font-bold mb-4">Professor Registration Number: {Professor.ProfessorRegistrationNumber}</h2>
                    <h2 className="text-2xl font-bold mb-4">Professor Department: {Professor.ProfessorDepartment}</h2>
                    <h2 className="text-2xl font-bold mb-4">Professor Institute Email ID: {Professor.ProfessorInstituteEmailID}</h2>
                    <h2 className="text-2xl font-bold mb-4">Professor Personal Email ID: {Professor.ProfessorPersonalEmailID}</h2>
                    <h2 className="text-2xl font-bold mb-4">Professor Area of Interest: {Professor.ProfessorAreaOfInterest}</h2>
                    <h2 className="text-2xl font-bold mb-4">Professor Digital Signature: {Professor.ProfessorDigitalSignature}</h2>
                    
                </div>
                <div>
                </div>
            </div>


            {/* Add more components as needed */}
        </div>
    );
};


export default ProfessorDashboard;
