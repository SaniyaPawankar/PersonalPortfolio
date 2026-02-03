import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./components/HomePage.jsx";
import ChatBot from "./components/ChatBot.jsx";
import AdminRegister from "./components/AdminRegister.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import UpdateProject from "./components/UpdateProject.jsx";
import AddProject from "./components/AddProject.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* App Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/projects/:id/edit" element={<UpdateProject/>}/>
        <Route path="/addprojects" element={<AddProject/>}/>
      </Routes>

      {/* Global Components (NOT routes) */}
      <ChatBot />
    </BrowserRouter>
  );
}

export default App;
