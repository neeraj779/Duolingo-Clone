import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleLogoSvg from "../assets/svg/google-logo.svg";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <section className="bg-[#131f24] w-full min-h-screen">
      <div className="relative flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="absolute left-0 right-0 flex justify-between px-4 top-4">
          <Link className="text-5xl text-gray-600 " to="/">
            &times;
          </Link>

          <Link
            to="/register"
            className="text-[#48c0f8] text-sm rounded-2xl border-2 border-b-4 border-[#37464f] bg-[#131f24] px-3 py-3 text-center font-bold uppercase transition"
          >
            Sign Up
          </Link>
        </div>

        <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-white">
              Log In
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-[#202f36] border-2 border-[#37464f] text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-white"
                  placeholder="Email or username"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="bg-[#202f36] border-2 border-[#37464f] text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-white"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update password state
                />
                <Link
                  to="/forgot-password"
                  className="absolute text-sm font-semibold text-gray-600 transform -translate-y-1/2 right-2 top-1/2"
                >
                  FORGOT?
                </Link>
              </div>
              <button
                type="submit"
                className={`w-full rounded-2xl border-b-4 border-[#1999d6] bg-[#48c0f8] px-10 py-3 text-center font-bold uppercase transition md:min-w-[320px] ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? "Logging in..." : "Log in"}
              </button>
            </form>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t-2 border-gray-600"></div>
              <span className="mx-2 text-sm text-[#52656d]">OR</span>
              <div className="flex-grow border-t-2 border-gray-600"></div>
            </div>

            <div className="flex justify-between space-x-4">
              <button
                type="button" // Button should not submit the form
                className="flex items-center justify-center text-[#3c5997] w-1/2 rounded-2xl border-2 border-b-4 border-[#37464f] bg-[#131f24] px-10 py-3 text-center font-bold uppercase transition space-x-2"
              >
                <img
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/ded9ca9461387f30221b67f627227388.svg"
                  className="w-6 h-6"
                  alt="Facebook Logo"
                />
                <span>Facebook</span>
              </button>
              <button
                type="button" // Button should not submit the form
                className="flex items-center justify-center text-[#3c5997] w-1/2 rounded-2xl border-2 border-b-4 border-[#37464f] bg-[#131f24] px-10 py-3 text-center font-bold uppercase transition space-x-2"
              >
                <img
                  src={GoogleLogoSvg}
                  className="w-6 h-6"
                  alt="Google Logo"
                />
                <span>Google</span>
              </button>
            </div>
            <div className="flex flex-col items-center text-[#52656d] text-xs">
              <p className="mb-4 text-center">
                By signing in to Duolingo, you agree to our <b>Terms</b> and{" "}
                <b>Privacy Policy</b>.
              </p>
              <p className="text-center">
                This site is protected by reCAPTCHA Enterprise and the Google{" "}
                <b>Privacy Policy</b> and <b>Terms of Service</b> apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
