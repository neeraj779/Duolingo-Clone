import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Landing";
import Learn from "./pages/Learn/Learn";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LangRegister from "./pages/LangRegister";
import Welcome from "./pages/Welcome";
import Character from "./pages/Character";
import Leaderboards from "./pages/Leaderboards";
import Quests from "./pages/Quests";
import ErrorBoundary from "./components/ErrorBoundary";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/language" element={<LangRegister />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
          <Route path="/quests" element={<Quests />} />
          <Route path="/character" element={<Character />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </ErrorBoundary>
      <Toaster
        toastOptions={{
          style: {
            background: "#5c5470",
            color: "#fff",
          },
        }}
      />
    </Router>
  );
}

export default App;
