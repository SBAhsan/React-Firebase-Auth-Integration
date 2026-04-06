import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="card bg-base-100 w-full mx-auto mt-12 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Please Login</h1>
        <form className="form">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p className='mt-2'>New to our website? Please <Link to={'/register'} className="text-blue-600 hover:text-blue-800 underline">Register</Link></p>
      </div>
    </div>
    );
};

export default Login;