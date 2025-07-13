import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@/Context/UserContext";
import { AppRoute } from "@/enums/AppRoute";

const EditProfile = () => {
  const { username, updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setNewName(username);
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim() === "") return;
    updateUser(newName);
    navigate(AppRoute.DASHBOARD);
  };
  const handleCancel = () => {
    navigate(AppRoute.DASHBOARD);
  };

  return (
    <div className="w-full min-h-screen px-4 py-8 flex justify-center items-start">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl border-2 border-primary rounded p-6 space-y-6 shadow-md">
        <h2 className="text-2xl font-bold text-center">Edit Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="username" className="text-sm font-medium">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full border-2 border-primary p-2 rounded"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <button
              type="submit"
              className="w-full sm:w-[80px] md:w-[100px] bg-card p-2 rounded hover:font-bold transition"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="w-full sm:w-[80px] md:w-[100px] p-2 rounded hover:bg-[#d4a37373] hover:text-destructive transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
