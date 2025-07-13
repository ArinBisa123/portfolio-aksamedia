import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute } from "@/enums/AppRoute";
import PrivateRoute from "@/Middlewares/PrivateRoute";
import Layout from "@/components/layout/layout";
import { UserProvider } from "@/Context/UserContext";
import { ThemeProvider } from "@/Context/ThemeContext";
import Login from "@/pages/Login/Login";
import Dashboard from "@/pages/Dashboard/Dashboard";
import NoPage from "@/pages/NoPage/NoPage";
import EditProfile from "@/pages/EditProfile/EditProfile";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <UserProvider>
          <Routes>
            <Route path={AppRoute.LOGIN} element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route element={<Layout />}>
                <Route path={AppRoute.DASHBOARD} element={<Dashboard />} />
                <Route path={AppRoute.EDIT_PROFILE} element={<EditProfile />} />
              </Route>
            </Route>

            <Route path={AppRoute.ANY} element={<NoPage />} />
          </Routes>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
