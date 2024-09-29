// "use client";

import { useSession, signOut } from "next-auth/react";

// React imports
import React from 'react'

// Component imports
import StudentCard from '@/components/Cards/StudentCard';
import TaskCard from '@/components/Cards/TaskCard';
import ProjectCard from '@/components/Cards/ProjectCard';
import GroupCard from '@/components/Cards/GroupCard';
import DocumentCard from '@/components/Cards/DocumentCard';
import ProfessorCard from '@/components/Cards/ProfessorCard';


const ProfessorHome = async () => {
  // const { data: session } = useSession();
  // console.log(session);
  // if (!session) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>

      <div className="flex justify-end">
        <div>
          <ProjectCard
            title="Projects"
            description="Create a new project or see your existing projects" />

          <GroupCard
            title="Groups"
            description="Create a new group or see your existing groups" />

          <DocumentCard
            title="Documents"
            description="Create a new document or see your existing documents" />

        </div>
        <div>
          <TaskCard
            title="Tasks"
            description="Create a new task or see existing tasks" />

          <StudentCard
            title="Students"
            description="Add a new student or see existing students" />

          <ProfessorCard
            title="Professors"
            description="Add a new professor or see existing professors" />
        </div>
      </div>

    </>
  )
}

export default ProfessorHome