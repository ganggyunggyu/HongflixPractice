import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminHome from "./pages/AdminHome";
import { Route, Routes } from "react-router-dom";

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
      </Routes>
    </>
  );
}

export default App;
