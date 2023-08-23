import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminHome from "./admin/AdminHome";
import { Route, Routes } from "react-router-dom";
import AdminContent from "./admin/AdminContent";
import AdminSetting from "./admin/AdminSetting";
import AdminMembers from "./admin/AdminMembers";

function App() {
  const inputValue = (e, setValue) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const handleFocus = (value, setValue) => {
    value ? setValue(false) : setValue(true);
  };
  const inputClear = (e, setValue) => {
    e.preventDefault();
    setValue("");
  };
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <Login
                inputValue={inputValue}
                handleFocus={handleFocus}
                inputClear={inputClear}
              ></Login>
            </>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <>
              <SignUp
                inputValue={inputValue}
                handleFocus={handleFocus}
                inputClear={inputClear}
              ></SignUp>
            </>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <>
              <AdminHome></AdminHome>
            </>
          }
        ></Route>
        <Route
          path="/admin/contents"
          element={
            <>
              <AdminContent></AdminContent>
            </>
          }
        ></Route>
        <Route
          path="/admin/setting"
          element={
            <>
              <AdminSetting></AdminSetting>
            </>
          }
        ></Route>
        <Route
          path="/admin/members"
          element={
            <>
              <AdminMembers></AdminMembers>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
