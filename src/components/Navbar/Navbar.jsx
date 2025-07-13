import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@/enums/AppRoute";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faUser,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "@/Context/UserContext";
import { ThemeContext } from "@/Context/ThemeContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { username } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [dropdown, setDropdown] = useState(false);
  const [themeDropdown, setThemeDropdown] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate(AppRoute.LOGIN);
  };
  const handleEditProfile = () => {
    navigate(AppRoute.EDIT_PROFILE);
    setDropdown(false);
  };
  return (
    <nav className=" p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Book App</h1>
      <div className="flex gap-2">
        <div className="relative">
          <button
            onClick={() => setThemeDropdown(!themeDropdown)}
            className="bg-primary px-3 py-2 rounded"
          >
            <p className="text-primary-foreground capitalize">Theme: {theme}</p>
          </button>
          {themeDropdown && (
            <div className="absolute right-0 mt-2 w-40 border rounded shadow-md">
              {["system", "light", "dark"].map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setTheme(t);
                    setThemeDropdown(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-primary-foreground bg-primary hover:bg-secondary ${
                    theme === t ? "font-semibold" : ""
                  }`}
                >
                  {t === "system"
                    ? "💻 System"
                    : t === "light"
                    ? "☀️ Light"
                    : "🌙 Dark"}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setDropdown(!dropdown)}
            className="px-5 py-2 text-primary-foreground bg-primary rounded flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faUser} />
            <p>Hi, {username || "User"}!</p>
          </button>
          {dropdown && (
            <>
              <div className="absolute right-0 mt-2 border rounded shadow-md w-40">
                <button
                  onClick={handleEditProfile}
                  className="block w-full text-left px-4 py-2   bg-primary  text-primary-foreground hover:bg-secondary"
                >
                  <FontAwesomeIcon icon={faPenToSquare} /> Edit
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2  bg-primary  text-primary-foreground hover:bg-secondary"
                >
                  <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
