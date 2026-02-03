import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./pages/AppLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import PatientFormPage from "./pages/PatientFormPage.tsx";
import PatientsPage from "./pages/PatientsPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/pacientes" element={<PatientsPage />} />
        <Route path="/pacientes/nuevo" element={<PatientFormPage />} />
        <Route path="/pacientes/:dni/editar" element={<PatientFormPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
