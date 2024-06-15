import React from 'react';

const LoginSignup = () => {
  return (
    <div className='loginSignup-container flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-50 to-purple-50'>
      <div className="loginSignupfields bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
        <input type="text" placeholder='Name' className="mb-4 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="email" placeholder='Email' className="mb-4 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="password" placeholder='Password' className="mb-6 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:bg-gradient-to-l hover:from-blue-600 hover:to-purple-600 transition duration-300 ease-in-out font-semibold">Continue</button>
        <p className='login-signup-login mt-6 text-center text-gray-600'>
          Already have an account? <span className="text-blue-500 cursor-pointer hover:underline">Login here</span>
        </p>
      </div>
      <div className="agree flex items-center mt-6 text-sm text-gray-600">
        <input type="checkbox" className="mr-2 h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400" />
        <p>By agreeing, I accept the <span className="text-blue-500 cursor-pointer hover:underline">privacy policy</span></p>
      </div>
    </div>
  );
}

export default LoginSignup;
