import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ChatBot from "../Features/Chatbot/ChatBot";
import AddProject from "../Pages/AddProject";
import AdminLogin from "../Pages/AdminLogin";
import AdminRegister from "../Pages/AdminRegister";
import UpdateProject from "../Pages/UpdateProject";
import ProjectDetails from "../Pages/ProjectDetails";
import FeedbackForm from "../Features/Testimonials/FeedbackForm";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/projects/:id/edit" element={<UpdateProject />} />
        <Route path="/addprojects" element={<AddProject />} />
        <Route path="/review" element={<FeedbackForm />} />
      </Routes>

      <ChatBot />
    </>
  );
};

export default AppRoutes;