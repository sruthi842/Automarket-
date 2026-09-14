
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    setMessage("Login successful! Welcome to AutoMarket.");

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-5 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl">
            🚗
          </div>

          <h1 className="mt-4 text-3xl font-black text-slate-900">
            Auto<span className="text-blue-600">Market</span>
          </h1>

          <p className="mt-2 text-slate-500">
            Sign in to your account
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {message && (
            <div className="rounded-xl bg-blue-50 p-3 text-center text-sm font-semibold text-blue-600">
              {message}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3.5 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
          >
            Sign In
          </button>

        </form>

        <Link
          to="/"
          className="mt-6 block text-center text-sm font-semibold text-slate-500 hover:text-blue-600"
        >
          ← Back to AutoMarket
        </Link>

      </div>
    </div>
  );
}

export default Login;