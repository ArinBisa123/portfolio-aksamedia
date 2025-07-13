import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBars,
  faXmark,
  faPenToSquare,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "@/Context/UserContext";
import { ThemeContext } from "@/Context/ThemeContext";
import { AppRoute } from "@/enums/AppRoute";

const Navbar = () => {
  const navigate = useNavigate();
  const { username } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [dropdown, setDropdown] = useState(false);
  const [themeDropdown, setThemeDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate(AppRoute.LOGIN);
  };

  const handleEditProfile = () => {
    navigate(AppRoute.EDIT_PROFILE);
    setDropdown(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="p-4 flex justify-between items-center bg-background border-b border-border relative">
      <h1 className="font-bold text-xl text-primary-foreground">Book App</h1>

      <div className="hidden md:flex items-center gap-4">
        <div className="relative">
          <button
            onClick={() => setThemeDropdown(!themeDropdown)}
            className="bg-primary px-3 py-2 rounded text-primary-foreground"
          >
            Theme: {theme}
          </button>
          {themeDropdown && (
            <div className="absolute right-0 mt-2 w-40 border rounded shadow-md bg-card z-10">
              {["system", "light", "dark"].map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setTheme(t);
                    setThemeDropdown(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-primary-foreground hover:bg-secondary ${
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
            <div className="absolute right-0 mt-2 border rounded shadow-md w-40 bg-card z-10">
              <button
                onClick={handleEditProfile}
                className="block w-full text-left px-4 py-2 hover:bg-secondary text-primary-foreground"
              >
                <FontAwesomeIcon icon={faPenToSquare} /> Edit
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-secondary text-primary-foreground"
              >
                <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <button
        className="md:hidden text-primary-foreground"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <FontAwesomeIcon icon={mobileMenuOpen ? faXmark : faBars} size="lg" />
      </button>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-card border-t border-border z-20 flex flex-col gap-2 p-4 md:hidden">
          <div className="text-primary-foreground font-semibold">
            Hi, {username || "User"}!
          </div>

          <div>
            <div className="text-sm mb-1 text-primary-foreground">Theme</div>
            {["system", "light", "dark"].map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTheme(t);
                  setThemeDropdown(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded text-primary-foreground hover:bg-secondary ${
                  theme === t ? "font-semibold bg-primary/20" : ""
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

          <hr className="my-2 border-border" />
          <button
            onClick={handleEditProfile}
            className="text-left px-4 py-2 rounded hover:bg-secondary text-primary-foreground"
          >
            <FontAwesomeIcon icon={faPenToSquare} /> Edit Profile
          </button>
          <button
            onClick={handleLogout}
            className="text-left px-4 py-2 rounded hover:bg-secondary text-primary-foreground"
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
