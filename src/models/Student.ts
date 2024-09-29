// models/Student.ts

import mongoose, { Schema, model, models } from "mongoose";

const StudentSchema = new Schema({
  StudentName: {
    type: String,
    required: [true, "Please provide the student's name"],
  },
  StudentEnrolmentNumber: {
    type: String,
    required: [true, "Please provide the enrolment number"],
    unique: true
  },
  StudentStudyBranch: {
    type: String,
    required: [true, "Please provide the study branch"],
  },
  StudentStudyYear: {
    type: String,
    required: [true, "Please provide the year of study"],
  },
  StudentContactNumber: {
    type: String,
    required: [true, "Please provide the contact number"],
  },
  StudentEmail: {
    type: String,
    required: [true, "Please provide the email"],
  },
});

export default models.Student || model("Student", StudentSchema);
