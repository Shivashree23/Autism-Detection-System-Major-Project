import { useState } from 'react';
import { useAuth } from './contexts/AuthContext';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || (!isLogin && !fullName)) {
      setError('Please fill in all required fields.');
      return;
    }

    // Simulate auth (no real backend here)
    login(email); // This will redirect to home
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6f3ff] px-4 text-[#1d4d85]">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 w-full max-w-md">
        {/* Tabs */}
        <div className="flex justify-between mb-8 border-b border-gray-200">
          <button
            className={`w-1/2 py-2 font-semibold ${
              isLogin ? 'text-[#2b7dad] border-b-2 border-[#2b7dad]' : 'text-gray-400'
            }`}
            onClick={() => {
              setIsLogin(true);
              setError('');
            }}
          >
            Log In
          </button>
          <button
            className={`w-1/2 py-2 font-semibold ${
              !isLogin ? 'text-[#2b7dad] border-b-2 border-[#2b7dad]' : 'text-gray-400'
            }`}
            onClick={() => {
              setIsLogin(false);
              setError('');
            }}
          >
            Sign Up
          </button>
        </div>

        {error && (
          <div className="text-red-700 text-sm mb-4 text-center font-medium">
            {error}
          </div>
        )}

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b7dad]"
                required
              />
            </div>
          )}

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b7dad]"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b7dad]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2b7dad] text-white py-2 rounded-md hover:bg-[#1d4d85] transition"
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
