import "./App.css";
import SignUp from "./Pages/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import Main from "./Pages/LandingPage/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={SignUp} />
          <Route path="/SignIn" Component={SignIn} />
          <Route path="/MainPage" Component={Main} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
