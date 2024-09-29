
import { getDocumentById } from '@/actions/DocumentActions'; // Import the Prisma action
import { Button } from '@/components/ui/button';
import Link from 'next/link';



const DocumentDashboard = async ({ params }: { params: { id: string } }) => {

    const Document = await getDocumentById(params.id);

    if (!Document) {
        return <p>Document not found or an error occurred.</p>;
    }

    return (
        <div className="p-6 text-white">
            <Link href="/professor/DocumentDetails">
                <Button
                    className="mb-4 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                >
                    Back
                </Button>
            </Link>

            <div className='flex'>
                <div>
                    <h1 className="text-2xl font-bold mb-4">Document Dashboard</h1><br /><br />
                    <h2 className="text-2xl font-bold mb-4">Document Name: {Document.DocumentName}</h2>
                    <h2 className="text-2xl font-bold mb-4">Document ID: {Document.DocumentID}</h2>
                    {/* <h2 className="text-xl mb-2">Name: {Document.DocumentName}</h2>
                    <h1 className="text-xl mb-2">Enrollment No: {Document.DocumentEnrolmentNumber}</h1>
                    <h1 className="text-xl mb-2">Branch: {Document.DocumentStudyBranch}</h1>
                    <h1 className="text-xl mb-2">Year: {Document.DocumentStudyYear}</h1>
                    <h1 className="text-xl mb-2">Contact Number: {Document.DocumentContactNumber}</h1>
                    <h1 className="text-xl mb-2">Email: {Document.DocumentInstituteEmailID}</h1> */}
                </div>
            </div>


            {/* Add more components as needed */}
        </div>
    );
};


export default DocumentDashboard;
