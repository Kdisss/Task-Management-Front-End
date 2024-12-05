import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/darktheme";
import Navbar from "./Pages/Navbar/Navbar";
import "./index.css"
import Home from "./Pages/Home/Home";

function App() {
  return (
    <ThemeProvider theme = {darkTheme}>
      <Navbar/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
