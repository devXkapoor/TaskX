// components/LogoutButton.tsx

import Link from 'next/link';

const LogoutButton = () => {
  return (
    <Link href="/api/auth/logout">
      <button className="bg-red-500 text-white px-4 py-2 rounded">
        Log Out
      </button>
    </Link>
  );
};

export default LogoutButton;
