import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', {
      email,
      password,
      rememberMe,
    });
  
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <div className="flex justify-center mb-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/e301/e9c9/53dbd57815857c13a1ccdc265e6de37b?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KxESYVmnShqBwK7q0RRxtlvI9jHZQZGFCDPZDTib-MAqvTe2oi~r5B298iqoeFrGaAbMxOKqMUSRjuRnX0y9QI7g0T-p8vpd~ZOcq9H-yl6fLsiD73r8p~L5poC8iv5LxkpuqNco9xDUh92GySZZ~qomHKCeaaoo7RG8EQQBDwy3vZ~6JY1LkcEfs2SYe2BXSUTj2UyALzfpTP942lutbbA8N65zmZgheDJMMDGqaxU-izcAQfBnvJIprP7EFyoiOAUiLkUykeAAEx96tfyi0cu2l22vaEwGF~mhhORpZpwwxHMMv9VhNGwFQi~FBpsYd0kwP3Sh10ffHrVYX3mAxw__" 
            alt="Logo"
            className="h-12 w-auto"
          />
        </div>
        <h3 className="text-3xl font-bold text-center mb-6 text-black-700">Welcome to Soft Webtechs Solutions</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm">?.
              
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2"
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
             Forgot password?
             </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?
          <a href="#" className="text-blue-600 hover:underline ml-1">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
