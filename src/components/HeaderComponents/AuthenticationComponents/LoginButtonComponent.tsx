// components/LoginButton.tsx

import Link from 'next/link';

const LoginButton = () => {
  return (
    <Link href="/api/auth/login">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Log In
      </button>
    </Link>
  );
};

export default LoginButton;
