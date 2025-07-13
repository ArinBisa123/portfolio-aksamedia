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
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Username</label>
          <input
            type="text"
            className="w-full border-3 border-primary p-2 rounded"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="space-x-3">
          <button
            type="submit"
            className="w-[100px] mb-2 bg-card p-2 rounded hover:font-bold"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="w-[100px] mb-2 p-2 rounded hover:bg-[#d4a37373] hover:text-destructive"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
