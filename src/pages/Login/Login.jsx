import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@/enums/AppRoute";
import user from "@/data/data";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === true) {
      navigate(AppRoute.DASHBOARD);
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === user.username && password === user.password) {
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("user", JSON.stringify(username));
      navigate(AppRoute.DASHBOARD);
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <>
      {error && alert(error)}
      <div className="flex flex-col justify-center items-center w-full min-h-screen px-4">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl border-primary border-4 rounded p-6 space-y-6 ">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Hello</h1>
            <p className="text-sm md:text-base mt-2">
              Login first to start looking for books
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="username" className="text-sm font-medium">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="border-primary border-2 rounded p-2 w-full"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border-primary border-2 rounded p-2 w-full"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[100px] bg-card p-2 rounded hover:bg-[#d4a37373] transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
