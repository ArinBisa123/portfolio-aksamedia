import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        if (parsed) {
          setUsername(parsed);
        }
      }
    } catch (err) {
      console.error("Failed to parse user:", err);
    }
  }, []);

  const updateUser = (newUsername) => {
    setUsername(newUsername);
    localStorage.setItem("user", JSON.stringify({ username: newUsername }));
  };

  return (
    <UserContext.Provider value={{ username, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
