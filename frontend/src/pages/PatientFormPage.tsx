import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import PatientForm from "../components/PatientForm";
import type { Patient } from "../types/patient";
import {
  createPatient,
  updatePatient,
  getPatientByDni,
} from "../services/patients-service";
import { toast } from "sonner";

const PatientFormPage = () => {
  const navigate = useNavigate();
  const { dni } = useParams<{ dni: string }>();
  const isEditing = Boolean(dni);

  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    if (isEditing && dni) {
      getPatientByDni(dni).then((data) => {
        if (data) setPatient(data);
      });
    }
  }, [isEditing, dni]);

  const handleSave = async (data: Patient) => {
    try {
      if (isEditing) {
        await updatePatient(data.dni, data);
        toast.success("Paciente actualizado con éxito");
      } else {
        await createPatient(data);
        toast.success("Paciente registrado correctamente");
      }
      navigate("/pacientes");
    } catch {
      toast.error("Error al conectar con el servidor");
    }
  };

  return (
    <section className="p-8">
      <PatientForm
        isEditing={isEditing}
        patient={patient}
        setPatient={setPatient}
        onSubmit={handleSave}
      />
    </section>
  );
};

export default PatientFormPage;
