// app/(authenticated)/student-dashboard/page.tsx

import UserProfile from '@/components/UserProfile';

const StudentDashboard = () => {
  return (
    <div className="flex flex-col items-center">
      <UserProfile />
      {/* Add more protected content here */}
    </div>
  );
};

export default StudentDashboard;
