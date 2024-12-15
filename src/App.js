import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/darktheme";
import Navbar from "./Pages/Navbar/Navbar";
import "./index.css";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./Redux/TaskSlice";
import { getUserProfile } from "./Redux/AuthSlice";

function App() {
  const user=true;
  const dispatch = useDispatch();
  const{task,auth}= useSelector(store=>store)

  useEffect(() => {
    dispatch(fetchTasks({}));
    dispatch(getUserProfile(auth.jwt || localStorage.getItem("jwt")));
  }, [auth.jwt]);
  return (
    <ThemeProvider theme={darkTheme}>
      {auth.user ? <div>
          <Navbar />
          <Home />
        </div> : <Auth />}
    </ThemeProvider>
  );
}

export default App;
