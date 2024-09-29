// app/auth/signin/page.tsx

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Button } from '@/components/ui/button';

const SignInPage = () => {
    const { user, isLoading } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && user) {
            router.push('/protected/student-dashboard'); // Redirect to a protected page after login
        }
    }, [user, isLoading, router]);

    const handleLogin = () => {
        window.location.href = '/api/auth/login'; // Initiates the Auth0 login flow
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-3xl mb-4">Sign in to Your Account</h1>
            <Button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 px-6 py-3 rounded">
                Sign in with Auth0
            </Button>
        </div>
    );
};

export default SignInPage;
