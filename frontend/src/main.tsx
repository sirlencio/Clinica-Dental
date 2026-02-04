import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./pages/AppLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import PatientFormPage from "./pages/PatientFormPage.tsx";
import PatientsPage from "./pages/PatientsPage.tsx";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import { Toaster } from "@/components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pacientes" element={<PatientsPage />} />
          <Route path="/pacientes/nuevo" element={<PatientFormPage />} />
          <Route path="/pacientes/:dni/editar" element={<PatientFormPage />} />
        </Route>
      </Routes>
      <Toaster position="top-center"/>
    </BrowserRouter>
  </ThemeProvider>,
);
