import { getStudentById } from '@/actions/StudentActions'; // Import the Prisma action
import ProfessorHome from '@/app/Professor/[ProfessorName]/page';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const StudentDashboard = async ({ params }: { params: { id: string } }) => {

    const student = await getStudentById(params.id);

    if (!student) {
        return <p>Student not found or an error occurred.</p>;
    }

    return (
        <>
            <div className="flex justify-around p-6 text-white">
                <div className='m-10'>
                    <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
                    <h2 className="text-xl mb-2">Name: {student.StudentName}</h2>
                    <h1 className="text-xl mb-2">Enrollment No: {student.StudentEnrolmentNumber}</h1>
                    <h1 className="text-xl mb-2">Branch: {student.StudentStudyBranch}</h1>
                    <h1 className="text-xl mb-2">Year: {student.StudentStudyYear}</h1>
                    <h1 className="text-xl mb-2">Contact Number: {student.StudentContactNumber}</h1>
                    <h1 className="text-xl mb-2">Email: {student.StudentInstituteEmailID}</h1>
                </div>
                <div>
                    <ProfessorHome />
                </div>
            </div>
        </>
    );
};


export default StudentDashboard;



{/* <div className='flex justify-start gap-10'>
                    <div>
                        <Link href="/StudentList">
                            <Button
                                className="mb-4 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                            >
                                Back
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <Link href="/StudentList">
                            <Button
                                className="mb-4 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                            >
                                Allot a Project
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <Link href="/StudentList">
                            <Button
                                className="mb-4 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                            >
                                Allot a Project
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <Link href="/StudentList">
                            <Button
                                className="mb-4 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                            >
                                Allot a Project
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <Link href="/StudentList">
                            <Button
                                className="mb-4 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
                            >
                                Allot a Project
                            </Button>
                        </Link>
                    </div>
                </div> */}
