import React from 'react';
import { loginEndPoint } from '../../../spotify';

export default function Login() {
  const handleLogin = () => {
    // Perform any login logic here, such as redirecting to the Spotify login endpoint
    window.location.href = loginEndPoint;
  };

  return (
    <div className="flex flex-col items-center justify-start w-full h-full">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Login to Spotify</h1>
      <p className="mt-3 max-w-2x1 text-lg text-gray-500 dark:text-gray-400"></p>
      <button onClick={handleLogin} className='px-6 py-4 mt-8 rounded bg-gradient-to-r from-blue-400 via-indigo-600 to-purple-600 hover:from-purple-600 focus:outline-none'>Login with Spotify</button>
      <script src={`${loginEndPoint}`}></script>
      <style jsx>{`
        .dark { background-color: #181818; color: white;}
      `}</style>
      <style jsx>{`
        @media (max-width: 640px) {
          /* mobile */
          & {
            flex-direction: column;
            max-w-md;
          }
          p { font-size: 0.75rem;}
          button { font-size: 0.875rem;}
        }
        @media (min-width: 641px) and (max-width: 768px) {
          /* tablet */
          & { flex-direction: row; align-items: center;}
        }
        @media screen and (min-width: 769px) {
          /* desktop */
          & { flex-direction: row-reverse;}
          p { font-size: 1.25rem; line-height: 1.5;}
          button { font-size: 1.5rem;}
        }
      `}
      </style>
    </div>
  );
}
