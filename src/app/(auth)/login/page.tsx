'use client';

import FormComponent from '@/components/FormComponent';
import LoginFormFields from '@/forms/LoginForm/LoginFormFields';
import LoginFormSchema from '@/forms/LoginForm/LoginFormSchema';
import { useState, FormEvent } from 'react';

// Zod Schema for Form Validation
const FormSchema = LoginFormSchema;

// Form Fields
const fields = LoginFormFields;

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <FormComponent
      formSchema={FormSchema}
      fields={fields}
      action={AddANewStudent}  // This is the server-side function
      submitLabel="Login"  // Custom submit button label
    />
  );
}